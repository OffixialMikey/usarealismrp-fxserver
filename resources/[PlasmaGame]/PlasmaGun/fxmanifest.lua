fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'PlasmaGun'
version '1.0.0'
author 'Sarish'


-- ui_page 'html/index.html'

files {
	'WeaponData/dlctext.meta',
	'WeaponData/pedpersonalitySPR.meta',
	'WeaponData/weaponarchetypesSPR.meta',
	'WeaponData/weaponanimationsSPR.meta',
	'WeaponData/weaponSPR.meta',
	'WeaponData/weapons.meta'
}



client_scripts {
	'WeaponData/weaponnames.lua'
}

data_file 'WEAPON_METADATA_FILE'   'WeaponData/weaponarchetypesSPR.meta'
data_file 'WEAPON_ANIMATIONS_FILE' 'WeaponData/weaponanimationsSPR.meta'
data_file 'WEAPONINFO_FILE'        'WeaponData/weaponSPR.meta'
data_file 'WEAPONINFO_FILE_PATCH'  'WeaponData/weapons.meta'
data_file 'TEXTFILE_METAFILE'      'WeaponData/dlctext.meta'
data_file 'PED_PERSONALITY_FILE'   'WeaponData/pedpersonalitySPR.meta'
