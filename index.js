const batteryLevel = document.querySelector(".batteryLevel")
const batteryCharging = document.querySelector(".batteryCharging")
const batteryChargingTime = document.querySelector(".batteryChargingTime")
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime")

const battery = () =>{
    if("getBattery" in navigator){
        navigator.getBattery().then((battery)=>{
            function updateAllBatteryDetails(){
                updateLevelInfo()
                updateChargingInfo()
                updateChargingTimeInfo()
                updateDischargingTimeInfo()
                console.log(battery)
            }
            updateAllBatteryDetails()

            // battery level info
            function updateLevelInfo(){
                const level = battery.level * 100 + "%"
                batteryLevel.innerHTML = level
            }

            // battery charging info
            function updateChargingInfo(){
                const isCharging = battery.charging ? "Yes" : "No"
                batteryCharging.innerHTML = isCharging
            }

            // battery charging time info
            function updateChargingTimeInfo(){
                const chargingTime = battery.chargingTime
                batteryChargingTime.innerHTML = chargingTime + " seconds"
            }

            // battery discharging time info
            function updateDischargingTimeInfo(){
                const dischargingTIme = battery.dischargingTime
                batteryDisChargingTime.innerHTML = dischargingTIme + " seconds"
                
            }
        })
    }
}

battery()