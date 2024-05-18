

const regionInfo = {
    "Region I-Ilocos Region": {
        "Ilocos Norte":{
            Adams           : [],
            Bacarra         : [],
            Badoc           : [],
            Bangui          : [],                
            Batac           : [],
            Burgos          : [],
            Carasi          : [],
            Currimao        : [],
            Dingras         : [],
            Dumalneg        : [],
            Espiritu        : [],
            "Laoag City"    : [],
            Marcos          : [],
            "Nueva Era"     : [],
            Pagudpud        : [],
            Paoay           : [],
            Pasuquin        : [],
            Piddig          : [],
            Pinili          : [],
            "San Nicolas"   : [],  
            Sarrat          : [],
            Solsona         : [],
            Vintar          : [],
        }, 
        "Ilocos Sur":{
            Alilem          : ["Alilem Daya (Pob.)","Amilongan","Anaao","Apang","Apaya","Batbato","Daddaay","Dalawa","Kiat","Demog"],
            Banayoyo        : ["Bagbagotot","Banbanaal","Bisangol","Cadanglaan","Casilagan Norte","Casilagan Sur","Elefante","Guardia","Lintic","Lopez","Montero","Naguimba","Pila","Poblacion"],
            Bantay          : ["Aggay","An-annam","Balaleng","Banaoang","Bulag","Buquig","Cabalanggan","Cabaroan","Cabusligan","Capangdanan","Guimod","Lingsat","Malingeb","Mira","Naguiddayan",
                                "Ora","Paing","Puspus","Quimmarayan","Sagneb","Sagpat","San Mariano (Sallacong)","San Isidro","San Julian","Sinabaan","Taguiporo","Taleb","Tay-ac",
                                "Barangay 1 (Pob.)","Barangay 2 (Pob.)","Barangay 3 (Pob.)","Barangay 4 (Pob.)","Barangay 5 (Pob.)","Barangay 6 (Pob.)"],
            Burgos          : [],
            Cabugao         : [],
            Candon          : [],
            Caoayan         : [],
            Cervantes       : [],
            Galimuyod       : [],
            "Gregorio del Pilar" : [],  
            Lidlida         : [],
            Magsingal       : [],
            Nagbukel        : [],
            Narvacan        : [],
            Quirino         : [],
            Salcedo         : [],
            "San Emilio"    : [],
            "San Esteban"   : [],
            "San Ildefonso" : [],
            "San Juan"      : [],
            "San Vicente"   : [],
            Santa           : [],
            "Santa Catalina": [],
            "Santa Cruz"    : [],
            "Santa Lucia"   : [],
            "Santa Maria"   : [],
            "Santiago"      : [],
            "Santo Domingo" : [], 
            Sicay           : [],
            Sinait          : [],
            Sugpon          : [],
            Suyo            : [],
            Tagudin         : [],
            Vigan           : [],       

        },
        "La Union": {
            Agoo          : [],
            Aringay       : [],
            Bacnotan      : [],
            Bagulin       : [],
            Balaoan       : [],
            Bangar        : [],
            Bauang        : [],
            Burgos        : [],
            Caba          : [],
            Damortis      : [],
            Luna          : [],
            Naguilian     : [],
            Pugo          : [],
            Rosario       : [],
            "San Fernando": [], 
            "San Gabriel" : [],
            "San Juan"    : [],
            Santol        : [],
            "Sto. Tomas"  : [], 
            Sudipen       : [],
            Tubao         : [],

        },
            Pangasinan: {
            Agno:           [],
            Aguilar:        [],
            Alaminos:       [],
            Alcala:         [],
            Anda:           [],
            Asingan:        [],
            Balungao:       [],
            Bani:           [],
            Basista:        [],
            Bautista:       [],
            Bayambang:      [],
            Binalonan:      [],
            Binmaley:       [],
            Bolinao:        [],
            Bugallon:       [],
            Burgos:         [],
            Calasiao:       [],
            "Dagupan City": [],
            Dasol:          [],
            Infanta:        [],
            Labrador:       [],
            Laoac:          [],
            Lingayen:       [],
            Mabini:         [],
            Malasiqui:      [],
            Manaoag:        [],
            mangaldan:      [],
            Mangatarem:     [],
            Mapandan:       [],
            Natividad:      [],
            Pozorrubio:     [],
            Rosales:        [],
            "San Carlos City":[],   
            "San Fabian":   [],
            "San Jacinto ": [],
            "San Manuel":   [],
            "San Nicolas":  [],
            "San Quintin":  [],
            Sison:          [],
            "Sta. Barbara": [],   
            "Sta. Maria":   [],
            "Sto. Tomas":   [],
            Sual:           [],
            Tayug:          [],
            Umingan:        [],
            Urbiztondo:     [],
            Urdaneta:       [],
            Villasis:       [],
        
      },
    },
    "Region II - Cagayan Valley":{

    },
    "Region III - Central Luzon":{

    },
    "Region IV-A - CALABARZON":{

    },   
    "MIMAROPA Region":{
        
    },
    "Region V - Bicol Region":{

    },
    "Region VI - Western Visayas":{

    },
    "Region VII - Central Visayas":{

    },
    "Region VIII - Eastern Visayas":{

    },
    "Region IX - Zamboanga Peninsula":{

    },
    "Region X - Northern Mindanao":{

    },
    "Region XI - Davao Region":{

    },
    "Region XII - SOCCSKSARGEN":{

    },
    "Region XIII - Caraga":{

    },
    "NCR - National Capital Region":{
        "Metro Manila": {
            "Pasig City": ["Bagong Ilog", "Bagong Katipunan", "Bambang", "Buting"],
             Pateros: ["Aguho", "Magtangol","Martires Del 96","Poblacion"],
      },
    },  
    "BARMM-Bangsamoro Autonomous Region in Muslim Mindanao":{

    }

  };


  window.onload = function () {
  
    const regionSelection = document.querySelector("#region"),
      provinceSelection = document.querySelector("#province"),
      citySelection = document.querySelector("#city"),
      brgySelection = document.querySelector("#brgy");


      for (let region in regionInfo) {
        regionSelection.options[regionSelection.options.length] = new Option(
          region,
          region
        );
      }

        //Todo: Region Changed

    regionSelection.onchange = (e) => {
        provinceSelection.disabled = false;
    
        provinceSelection.length = 1; 
        citySelection.length = 1; 
        brgySelection.length = 1; 
    
        // if (e.target.selectedIndex < 1) return; // done
    
        // todo: Load province by looping over regionInfo
        for (let province in regionInfo[e.target.value]) {
          provinceSelection.options[provinceSelection.options.length] = new Option(
            province,
            province
          );
        }
    }
  
        //todo: Province Changed
  provinceSelection.onchange = (e) => {
    citySelection.disabled = false;

    citySelection.length = 1; 
    brgySelection.length = 1; 

    for (let city in regionInfo[regionSelection.value][e.target.value]) {
      citySelection.options[citySelection.options.length] = new Option(
        city,
        city
       );
    }
  };


    //todo: City Changed
    citySelection.onchange = (e) => {
        brgySelection.disabled = false;
        brgySelection.length = 1; 

        let brgy =  regionInfo[regionSelection.value][provinceSelection.value][e.target.value];

        for (let i=0; i < brgy.length; i++) {
          brgySelection.options[brgySelection.options.length] = new Option(
            brgy[i],
            brgy[i]
          );
        }
      };

    }



