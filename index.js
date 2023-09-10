const batteryLevel = document.querySelector(".batteryLevel")
const batteryCharging = document.querySelector(".batteryCharging")
const batteryChargingTime = document.querySelector(".batteryChargingTime")
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime")

const battery = () =>{
    if("getBattery" in navigator){
        navigator.getBattery().then((battery)=>{
            // Global Function
            function updateAllBatteryDetails(){
                updateLevelInfo()
                updateChargingInfo()
                updateChargingTimeInfo()
                updateDischargingTimeInfo()
            }
            updateAllBatteryDetails()

            // battery level info
            battery.addEventListener("levelinfo", ()=>{
                updateLevelInfo()
            })

            function updateLevelInfo(){
                const level = battery.level * 100 + "%"
                batteryLevel.innerHTML = level
            }

            // battery charging info
            battery.addEventListener("charginginfo", ()=>{
                updateChargingInfo()
            })

            function updateChargingInfo(){
                const isCharging = battery.charging ? "Yes" : "No"
                batteryCharging.innerHTML = isCharging
            }

            // battery charging time info
            battery.addEventListener("chargingtimechangeinfo", ()=>{
                updateChargingTimeInfo()
            })

            function updateChargingTimeInfo(){
                const chargingTime = battery.chargingTime
                batteryChargingTime.innerHTML = chargingTime
            }
            // battery discharging time info
            battery.addEventListener("dischargingtimeinfo", ()=>{
                updateDischargingTimeInfo()
            })

            function updateDischargingTimeInfo(){
                const dischargingTIme = battery.dischargingTime
                batteryDisChargingTime.innerHTML = dischargingTIme + " seconds"
                
            }
        })
    }
}

battery()