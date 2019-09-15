//% weight=0 color=#2244DE icon="\uf0ad"
namespace nodemcutomicrobit {
      export enum analogpin {
        A0 = 0
     }
     let iii=1
     let ssid1=""
     let pass1=""
     let mode2=1
      export enum digitalpin {
        D0 = 16,
        D1 = 5,
        D2 = 4,
        D3 = 0,
        D4 = 2,
        D5 = 14,
        D6 = 12,
        D7 = 13,
        D8 = 15
     }
      
     
      export enum value555 {
        field1 = 1 ,
        field2 = 2,
        field3 = 3,
        field4 = 4,
        field5 = 5,
        field6 = 6,
        field7 = 7,
        field8 = 8
     }
      
      

      export enum type {
        INPUT = 2,
        OUTPUT = 1
     }
     export enum value {
        HIGH = 1,
        LOW = 0
     }

     export enum mode {
        STA = 1,
        AP = 0
     }
      
    //% blockId=setMicrobit block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=101
    //% blockExternalInputs = 1
    export function node_setMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        basic.pause(1000)
    }

    //% blockId=setWiFi block="Set Nodemcu | SSID %SSID| Pass %PASS| Mode %mode1 "
    //% weight=101
    //% blockExternalInputs = 1
    export function node_setWiFi(SSID: string, PASS: string, mode1: mode) {
        ssid1=SSID
        pass1=PASS
        mode2=mode1
    }
    
    function check()
    {  
        if (iii==1 && ssid1!="")
        {
            let y
            for(y=0;y<3;y++)
            {
                  serial.writeLine("setwifi="+ssid1+","+pass1+","+mode2+",1\\n")  
                  basic.pause(3000)
            }
            iii=iii+1
        }
    }  
      
}
