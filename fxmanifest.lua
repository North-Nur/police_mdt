client_script '@99x_SUPER_EXPORTS/exports/export_client.lua'
server_script '@99x_SUPER_EXPORTS/exports/export_server.lua'
client_script '@X.Brain/Shared/xGuardPlayer.lua'

fx_version 'cerulean'

games {'gta5' }

ui_page 'ui/ui.html'

files {	
    'ui/ui.html',
	'ui/main.js',
	'ui/*.css',
    'ui/*.png',
    'ui/sound/*.mp3',
    'ui/sound/*.ogg'
}

client_scripts {
    '@obob-faketoken/obob.lua',
    "config.lua",
    'client.lua'   
}


-- server_script {  
--     "@mysql-async/lib/MySQL.lua",
-- 	"config.lua",  
--     'server.lua'
-- }
