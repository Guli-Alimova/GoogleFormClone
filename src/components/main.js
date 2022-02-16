

export const questionsArray = [
    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Умумий соғлигингиз ҳолатини қандай бахолайсиз? ",
        options: {
            type: 'single',
            optionsList: [
                {
                    title: "Аъло даражада", 
                    score: 1, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Жуда яхши", 
                    score: 2, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Яхши", 
                    score: 3, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Коникарли", 
                    score: 4, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Ёмон", 
                    score: 5, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Хозирги ҳолатингизни 4 ой олдинги ҳолат билан солиштирганда қандай баҳолайсиз?  ",
        options: {
            type: 'single',
            optionsList: [
                {
                    title: "Аввалгидан анча яхши", 
                    score: 1, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Аввалгидан бироз яхши", 
                    score: 2, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Деярли аввалгидек", 
                    score: 3, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Аввалгидан ёмонрок", 
                    score: 4, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Аввалгидан жуда ёмон", 
                    score: 5, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Кейинги саволлар сизнинг одатий кунингизда дуч келадиган жисмоний юкламалар билан боғлиқ. Хозирги вақтда сизнинг соғлиғингиз ҳолати қуйида келтирилган жисмоний юкламаларни бажаришда қийинчилик туғдирадими (чегараланганми)? Агар шундай бўлса қай даражада намоён бўлади? ",
        options: {
            type: 'multiple',
            subOptionTitles:[
                {
                    order: 1,
                    text: 'Ха, яққол чегараланган'
                },
                {
                    order: 2,
                    text: 'Ха бироз чегараланган'
                },
                {
                    order: 3,
                    text: 'Йўк, умуман чегараланмаган'
                },
            ], 
            optionsList: [
                {
                    title: "Югуриш, оғир юк кўтариш, спортнинг куч сарф этувчи турлари билан шуғулланиш каби оғир жисмоний юкламалар", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 3
                        },
                     
                    ]
                },
                {
                    title: "Столни суриш, чангюткич билан ишлаш, мева ва резаворларни териш каби ўртача жисмоний юкламалар", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 3
                        },
                     
                    ]
                },
                {
                    title: "Махсулотлар солинган сумкани кўтариш ёки кўтариб юриш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
                {
                    title: "Бир қанча зинапоядан пиёда кўтарилиш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
                {
                    title: "Битта зинапоядан пиёда кўтарилиш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
                {
                    title: "Олдинга энгашиш, тиззада туриш, чўккалаб ўтириш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
                {
                    title: "Бир километрдан ортиқ масофага юриш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
                {
                    title: "200 метрдан ортиқ масофага юриш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
                {
                    title: "100 метр масофага юриш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
                {
                    title: "Мустақил равишда ювиниш ва кийиниш", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                         
                        ]
                },
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Охирги 4 ҳафта ичида кундалик юмушларни бажаришда қийинчилик туғилдими, нима сабабдан? ",
        options: {
            type: 'multiple',
            subOptionTitles:[
                {
                    order: 1,
                    text: 'Ха'
                },
                {
                    order: 2,
                    text: 'Йуқ'
                },
               
            ], 
            optionsList: [
                {
                    title: "Мўлжалингиздан кўра камроқ иш бажардингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                      
                     
                    ]
                },
                {
                    title: "Меҳнат фаолияти ёки бошқа юмушларни бажариш вақтини қисқартиришга тўғри келди", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                     
                     
                    ]
                },
                {
                    title: "Сиз муайян иш турини ёки бошқа бир фаолиятни бажаришга чекландингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                           
                        ]
                },
                {
                    title: "Ўз ишингизни ёки бошқа юмушларни бажаришда қийинчиликка дуч келдингиз (масалан қўшимча уруниш талаб этади)", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                         
                         
                        ]
                },
            
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Охирги 4 ҳафта ичида эмоционал ҳолатингиз (кайфиятингиз) ўз ишингиз ёки бошқа кундалик юмушларни бажаришда қийинчилик туғдирдими, нима сабабдан? ",
        options: {
            type: 'multiple',
            subOptionTitles:[
                {
                    order: 1,
                    text: 'Ха'
                },
                {
                    order: 2,
                    text: 'Йуқ'
                },
               
            ], 
            optionsList: [
                {
                    title: "Меҳнат фаолияти ёки бошқа юмушларни бажариш вақтини қисқартиришга тўғри келди", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                      
                     
                    ]
                },
                {
                    title: "Мўлжалингиздан кўра камроқ иш бажардингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                     
                     
                    ]
                },
                {
                    title: "Ўз ишингизни ёки бошқа юмушларни одатий тартибда бажара олмадингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                           
                        ]
                },
               
            
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Охирги 4 ҳафта ичида жисмоний (соғлиғингиз) ва эмоционал ҳолатингиз (кайфиятингиз) сизга оила аъзоларингиз, дўстларингиз, қўшниларингиз ва (ёки) хамкасабаларингиз билан бирга вақт ўтказишингизга қанчалик тўсқинлик қилди?  ",
        options: {
            type: 'single',
            optionsList: [
                {
                    title: "Мутлақо (тўсқинлик қилмади)", 
                    score: 1, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Бироз", 
                    score: 2, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Ўртача", 
                    score: 3, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Сезиларли", 
                    score: 4, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Жуда", 
                    score: 5, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Охирги 4 ҳафта ичида қанчалар кучли жисмоний оғриқ ҳис қилдингиз? ",
        options: {
            type: 'single',
            optionsList: [
                {
                    title: "Мутлақо сезмадим", 
                    score: 1, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Жуда оз", 
                    score: 2, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Оз даражада", 
                    score: 3, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Ўртача", 
                    score: 4, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Кучли", 
                    score: 5, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Жуда кучли", 
                    score: 6, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Охирги 4 ҳафта ичида сизни безовта қилган оғрик қай даражада одатий ишингизни бажаришга халақит берди (уй ва уйдан ташкарида)? ",
        options: {
            type: 'single',
            optionsList: [
                {
                    title: "Мутлақо", 
                    score: 1, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Бироз", 
                    score: 2, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Уртача", 
                    score: 3, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Кучли", 
                    score: 4, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Жуда кучли", 
                    score: 5, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
               
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Кейинги савол сиз ўзингизни охирги 4 хафта ичида қандай ҳис қилганлигингиз ва кайфиятингиз қандай бўлганлиги тўғрисида. Илтимос қуйидаги саволларга жавоб беришда ҳиссиётингизга энг мос келадиган битта жавобни танланг. ",
        options: {
            type: 'multiple',
            subOptionTitles:[
                {
                    order: 1,
                    text: 'Хар доим'
                },
                {
                    order: 2,
                    text: 'Купинча'
                },
                {
                    order: 3,
                    text: '	Тез-тез'
                },
                {
                    order: 4,
                    text: 'Баъзида'
                },
                {
                    order: 5,
                    text: 'Кам холларда'
                },
                {
                    order: 6,
                    text: 'Хеч қачон'
                },
            ], 
            optionsList: [
                {
                    title: "Ўзингизни тетик сездингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 3
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 4
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 5
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 6
                        },
                     
                    ]
                },
                {
                    title: "Ўзингизни куч-қувватга тўла ҳис эттингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 3
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 4
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 5
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 6
                        },
                     
                    ]
                },
                {
                    title: "Ўзингизни тинч ва хотиржам ҳис эттингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 6
                            },
                         
                        ]
                },
                {
                    title: "Ўзингизни бахтли ҳис қилдингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 6
                            },
                         
                        ]
                },
                {
                    title: "Сиз кучли асабийлашдингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 6
                            },
                         
                        ]
                },
                {
                    title: "Ўзингизни шундай тушкун ҳис қилдингизки ҳеч нарса сизни тетиклаштира олмасди", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 6
                            },
                         
                        ]
                },
                {
                    title: "Ўзингизни руҳан тушкун ва қайғули ҳолатда ҳис этдингиз.", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 6
                            },
                         
                        ]
                },
                {
                    title: "Ўзингизни эзилгандек ҳис эттингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 6
                            },
                         
                        ]
                },
                {
                    title: "Ўзингизда чарчаш ҳолатини сездингиз", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 6
                            },
                         
                        ]
                },
               
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Умумий соғлигингиз ҳолатини қандай бахолайсиз? ",
        options: {
            type: 'single',
            optionsList: [
                {
                    title: "Ҳар доим", 
                    score: 1, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Купинча", 
                    score: 2, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Баъзида", 
                    score: 3, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Кам ҳолатда", 
                    score: 4, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
                {
                    title: "Ҳеч қачон", 
                    score: 5, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions:  null
                },
            ]
        }
    } ,

    {
        id:Math.ceil(Math.random() * 10) + Date.now(),
        title:"Қуйида келтирилган жумлалардан қайсилари сизга нисбатан мос келади ёки келмайди",
        options: {
            type: 'multiple',
            subOptionTitles:[
                {
                    order: 1,
                    text: 'Худди шундай'
                },
                {
                    order: 2,
                    text: 'Деярли шундай'
                },
                {
                    order: 3,
                    text: '	Билмайман'
                },
                {
                    order: 4,
                    text: 'Менимча ундай эмас'
                },
                {
                    order: 5,
                    text: 'Ундай эмас'
                },
                
            ], 
            optionsList: [
                {
                    title: "Мен бошқаларга нисбатан касалликка мойилроқман деб ўйлайман", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 3
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 4
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 5
                        },
                     
                     
                    ]
                },
                {
                    title: "Мен соғлиғим ёмонлашади деган ҳавотирдаман", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 1
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 2
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 3
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 4
                        },
                        {
                            id:Math.ceil(Math.random() * 10) + Date.now(),
                            score: 5
                        },
                       
                     
                    ]
                },
                {
                    title: "Мени соғлиғим кўпчилик танишларимникидан ёмон эмас.", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                          
                         
                        ]
                },
                {
                    title: "Мени соғлиғим аъло даражада", 
                    score: null, 
                    id:Math.ceil(Math.random() * 10) + Date.now(),
                    subOptions: [
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 1
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 2
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 3
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 4
                            },
                            {
                                id:Math.ceil(Math.random() * 10) + Date.now(),
                                score: 5
                            },
                         
                         
                        ]
                },
          
               
            ]
        }
    } ,







]



