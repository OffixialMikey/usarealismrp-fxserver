local debug = false

local SELLABLE_ITEMS = {
	["Packaged Meth"] = {150, 350},
	["Packaged Blue Meth"] = {375, 650},
	["Packaged Weed"] = {350, 500},
	["Packaged Cocaine"] = {600, 1250},
	["LSD Vial"] = {100, 400}
}

-- see if player has any items to sell to NPC
RegisterServerEvent('sellDrugs:checkPlayerHasDrugs')
AddEventHandler('sellDrugs:checkPlayerHasDrugs', function()
	local char = exports["usa-characters"]:GetCharacter(source)
	for item_name, reward in pairs(SELLABLE_ITEMS) do
		if char.hasItem(item_name) then
			local policeOnline = exports["usa-characters"]:GetNumCharactersWithJob("sheriff")
			if policeOnline == 0 then
				TriggerClientEvent('sellDrugs:showHelpText', source, 0.60)
			elseif policeOnline == 1 then
				TriggerClientEvent('sellDrugs:showHelpText', source, 0.55)
			elseif policeOnline == 2 then
				TriggerClientEvent('sellDrugs:showHelpText', source, 0.45)
			elseif policeOnline > 2 then
				TriggerClientEvent('sellDrugs:showHelpText', source, 0.40)
			end
			if debug then print("had items to sell to NPC!") end
		else
			if debug then print("nothing to sell!!") end
		end
	end
end)

-- player sold something, remove item + reward with money
RegisterServerEvent('sellDrugs:completeSale')
AddEventHandler('sellDrugs:completeSale', function()
	local quantity = 1
	local char = exports["usa-characters"]:GetCharacter(source)
	for item_name, reward in pairs(SELLABLE_ITEMS) do
		if char.hasItem(item_name) then
			local drug_item = char.getItem(item_name)

			if drug_item.name == 'Packaged Weed' then
				TriggerClientEvent('evidence:weedScent', source)
			end
			-- randomize quantity ped is buying:
			quantity = math.random(1, drug_item.quantity)
			while quantity > 3 do quantity = math.random(drug_item.quantity) end

			local reward = math.random(SELLABLE_ITEMS[drug_item.name][1], SELLABLE_ITEMS[drug_item.name][2]) * quantity
			local bonus = 0

			if exports["usa-characters"]:GetNumCharactersWithJob("sheriff") >= 3 then
				bonus = math.floor((reward * 1.30) - reward)
			end

			char.removeItem(drug_item, quantity)
			char.giveMoney((reward + bonus))
			print('SELLDRUGS: Player '..GetPlayerName(source)..'['..GetPlayerIdentifier(source)..'] has sold item['..drug_item.name..'] with quantity['..quantity..'] with reward['..reward..'] with bonus['..bonus..']!')
			TriggerClientEvent("usa:notify", source, "You sold ~y~(x"..quantity..") " .. drug_item.name .. " ~s~for $" .. reward + bonus..'.00~s~.')
			return
		else
			if debug then print("nothing to sell!!") end
		end
	end
end)
