
ESX = nil
local PlayerData = {}
local display = false 
data = {}

local Keys = {
    ["ESC"] = 322, ["F1"] = 288, ["F2"] = 289, ["F3"] = 170, ["F5"] = 166, ["F6"] = 167, ["F7"] = 168, ["F8"] = 169, ["F9"] = 56, ["F10"] = 57,["~"] = 243, 
    ["1"] = 157, ["2"] = 158, ["3"] = 160, ["4"] = 164, ["5"] = 165, ["6"] = 159, ["7"] = 161, ["8"] = 162, ["9"] = 163, ["-"] = 84, ["="] = 83, ["BACKSPACE"] = 177,
	["TAB"] = 37, ["Q"] = 44, ["W"] = 32, ["E"] = 38, ["R"] = 45, ["T"] = 245, ["Y"] = 246, ["U"] = 303, ["P"] = 199, ["["] = 39, ["]"] = 40, ["ENTER"] = 18,
    ["CAPS"] = 137, ["A"] = 34, ["S"] = 8, ["D"] = 9, ["F"] = 23, ["G"] = 47, ["H"] = 74, ["K"] = 311, ["L"] = 182,["LEFTSHIFT"] = 21, ["Z"] = 20, ["X"] = 73, ["C"] = 26, 
    ["V"] = 0, ["B"] = 29, ["N"] = 249, ["M"] = 244, [","] = 82, ["."] = 81,["LEFTCTRL"] = 36, ["LEFTALT"] = 19, ["SPACE"] = 22, ["RIGHTCTRL"] = 70,["HOME"] = 213, 
    ["PAGEUP"] = 10, ["PAGEDOWN"] = 11, ["DELETE"] = 178,["LEFT"] = 174, ["RIGHT"] = 175, ["TOP"] = 27, ["DOWN"] = 173,["NENTER"] = 201, ["N4"] = 108, ["N5"] = 60, 
    ["N6"] = 107, ["N+"] = 96, ["N-"] = 97, ["N7"] = 117, ["N8"] = 61, ["N9"] = 118
}


Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent("esx:getSharedObject", function(obj) ESX = obj end)
		Citizen.Wait(0)
	end

    while ESX.GetPlayerData().job == nil do
		Citizen.Wait(100)
	end
	
	PlayerData = ESX.GetPlayerData()
end)



-- Citizen.CreateThread(function()
-- 	while true do
-- 		Wait(0)
-- 		if IsControlJustReleased(0, 38) then 
			
			
-- 			-- mdt()			 
-- 		end
-- 	end	
-- end)


-- Citizen.CreateThread(function()
-- 	while true do
-- 		Wait(3000)
-- 		print(json.encode(data))
		
-- 	end
	
	
-- end)


RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
	PlayerData.job = job	
end)


-- Citizen.CreateThread(function()
-- 	while true do
-- 		if IsControlJustReleased(0, Keys['F6']) then
-- 			if PlayerData.job.name == "police" then
-- 				if display == false then 
-- 					TriggerServerEvent("getplayer:zone")
					
-- 					SetTimeout(1500, function()		
-- 						mdt()
-- 					end)
-- 					display=true 
-- 				end 
-- 			end
-- 		end
		
-- 		Wait(1)
-- 	end
-- end)

-- RegisterNetEvent("Fxw:openJailMenu")
-- AddEventHandler("Fxw:openJailMenu", function()
	
-- end)


RegisterNetEvent('open:mdt')
AddEventHandler('open:mdt', function()
	
	if not display then 
		display = not display
		data = {}

		-- TriggerServerEvent("getplayer:zone")

		local ped = PlayerPedId()
		local x1, y1, z1 = table.unpack( GetEntityCoords( ped, true ) )
		for i,Player in ipairs(GetActivePlayers()) do
			local Ped = GetPlayerPed(Player)
			if Ped ~= ped  then					
				
				local x2, y2, z2 = table.unpack( GetEntityCoords( Ped, true ) )
				local distance = math.floor(GetDistanceBetweenCoords(x1,  y1,  z1,  x2,  y2,  z2,  true))
				if distance < 5.0 then
					table.insert(data, {name = GetPlayerName(Player), Id = GetPlayerServerId(Player)})	
				end
			end				
		end
		-- SetTimeout(1300, function()		
			mdt()
			-- TriggerEvent("Fxw:openmenutime")
		-- end)
	end
end)

-- RegisterNetEvent('get:playcoords')
-- AddEventHandler('get:playcoords', function(coord)
	
-- 	if PlayerData.job.name ~= "police" then
		
-- 		distance = GetDistanceBetweenCoords(GetEntityCoords(PlayerPedId()), coord, true)	

-- 		if distance < 5.0 then
-- 			TriggerServerEvent("get:id:to:sv", GetPlayerServerId(PlayerId()))
-- 		end	
-- 	end
-- end)

-- RegisterNetEvent('get:id:to:cl')
-- AddEventHandler('get:id:to:cl', function(name,Id)	
-- 	local name = name
-- 	local Id   = Id

-- 	if PlayerData.job.name == "police" then
-- 		table.insert(data, {name = name, Id = Id})	
-- 	end
	
-- end)

-- RegisterCommand("pmdt", function()	
-- 	TriggerEvent("open:mdt")
-- 	if PlayerData.job.name == "police" then
-- 		if display == false then 
-- 			TriggerServerEvent("getplayer:zone")
			
-- 			SetTimeout(1500, function()		
-- 				mdt()
-- 			end)
-- 			display=true 
-- 		end 
-- 	end
-- end)

function mdt()
	

	SetNuiFocus(true,true)
	for n,e in pairs(data) do					
		SendNUIMessage({
			action 	= "player",
			name 	= e.name,
			id		= e.Id			
		})

		-- print(json.encode(e.name))
		-- print(json.encode(e.Id))
	end
	for k,v in pairs(Config["คดี"]) do						
				
		
			SendNUIMessage({
				action 	= "add",
				type = v.type,
				label	= v.label, -- ข้อหา
				fine 	= v.fine, --ค่าปรับ
				jail 	= v.jail	--เวลาติดคุก			
			})	
			-- print(json.encode(v.type))			
			-- -- print(json.encode(v.label))
			-- print(json.encode(v.fine))
			-- print(json.encode(v.jail))
		
	end
end

RegisterNetEvent("OpenMenujail")
AddEventHandler("OpenMenujail", function()
		
	mdt()
	
end)
RegisterNetEvent("Fxw:openmenutime")
AddEventHandler("Fxw:openmenutime", function(jailTime)

	-- SetNuiFocus(false,false)
	for n,e in pairs(data) do					
		SendNUIMessage({
			action 	= "showtime",
			showtime 	= e.jailTime,
		})

		-- print(json.encode(e.showtime))
		-- print(json.encode(e.Id))
	end

end)

function hidetime()
	

	SetNuiFocus(false,false)
	for n,e in pairs(data) do					
		SendNUIMessage({
			action 	= "hidetime",
		})
	end
	
end



RegisterNUICallback('quit', function(data, cb)
	display = not display
    SetNuiFocus(false, false)
    Wait(3000)
   

end)

RegisterNUICallback('jail', function(data, cb)
	display = not display
	SetNuiFocus(false, false)
	-- print('123')
    -- print(data.jailTime)
	-- print(data.finePlayer)
	-- print(data.player)
    -- print(data.label)
	TriggerServerEvent("esx-qalle-jail:jailPlayer", tonumber(data.player), data.jailTime, data.label, obobfaketoken)

	TriggerServerEvent('esx_billing:sendBill', tonumber(data.player), 'society_police',data.label, data.finePlayer, obobfaketoken)
	
end)





-- TriggerServerEvent('esx_billing:sendBill', GetPlayerServerId(Id), 'society_police', ('รายละเอียด: %s', label) fine)
-- TriggerServerEvent("esx-qalle-jail_topone:jailPlayer", GetPlayerServerId(Id), jail, label)