const initialState = {

    height: 500,
    width: 900,
    plan_index: 2,
    new_arr: [],
    group_arr: [],
    plan_size: {h:0,w:0},
    distance: 50,
    scale: 1,
    data_size:{},

    test_data:[
        {
            "planId": "624b2a55eebff930f48704e5",
            "planUrl": "/plan-1.jpg",
            "planName": "15 этаж",
            "markers": [
                {   
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 624.913146972656,
                    "y" : 171.780319213867
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 728.039978027344,
                    "y" : 171.780319213867
                },
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 681.164123535156,
                    "y" : 303.032592773438
                },
                {
                    "type":"viev",
                    "label": "1234",
                    "color": "#8695A6",
                    "x" : 599.912719726563,
                    "y" : 371.783782958984
                }
            ]
        },
        {
            "planId": "624b2a55eebff930f48704e5",
            "planUrl": "/plan-1.jpg",
            "planName": "15 этаж",
            "markers": [
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 974.919250488281,
                    "y" : 812.416442871094
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 624.913146972656,
                    "y" : 328.033020019531
                },
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 606.162841796875,
                    "y" : 1453.05249023438
                }
            ]
        },
        {
            "planId": "624b2a55eebff930f48704e5",
            "planUrl": "/plan-1.jpg",
            "planName": "15 этаж",
            "markers": [
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 953.043823242188,
                    "y" : 1756.18273925781,
                    
                },
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 696.789428710938,
                    "y" : 1524.9287109375,
                    
                },
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 896.792846679688,
                    "y" : 1221.79846191406,
                    
                },
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 618.6630859375,
                    "y" : 1253.04907226563,
                    
                },
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 903.04296875,
                    "y" : 1453.05249023438,
                    
                },
                {
                    "type":"block",
                    "label": "127",
                    "color": "#90D857",
                    "x" : 643.663513183594,
                    "y" : 1715.55700683594,
                    
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 656.163696289063,
                    "y" : 1537.42895507813,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 690.539304199219,
                    "y" : 1587.42993611117,
                    "color": "#8695A6"
                },
                {
                    "type":"viev",
                    "label": "1234",
                    "color": "#8695A6",
                    "x" : 740.540161132813,
                    "y" : 1559.30432128906,
                    
                },
                {
                    "type":"viev",
                    "label": "1234",
                    "color": "#8695A6",
                    "x" : 684.289184570313,
                    "y" : 1487.42810058594,
                    
                },
                {
                    "type":"viev",
                    "label": "1234",
                    "color": "#8695A6",
                    "x" : 712.41467158257,
                    "y" : 1521.80378218274,
                    
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 903.04296875,
                    "y" : 1512.42858886719,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 846.791989746094,
                    "y" : 1443.67737263461,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 843.666931152344,
                    "y" : 1499.92834472656,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 862.417248883036,
                    "y" : 1468.67788504643,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 874.917506847566,
                    "y" : 1484.30312474245,
                    "color": "#FF9D28"
                },
                {
                    "label": "1",
                    "type":"block",
                    "x" : 887.417735991873,
                    "y" : 1228.04865991927,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 899.91793057642,
                    "y" : 1237.42382111647,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 890.542791287491,
                    "y" : 1218.67349754966,
                    "color": "#FF9D28"
                },
                {
                    "type":"block",
                    "label": "1",
                    "x" : 790.541015625,
                    "y" : 1331.17541503906,
                    "color": "#FF9D28"
                }
            ]
        },
        {
            "planId": "624b2a5deebff930f48704f2",
            "planUrl": "/plan-2.jpg",
            "planName": "План 23 этажа",
            "markers": [
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 1261.53527832031,
                    "y" : 1511.18432617188
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 580.76318359375,
                    "y" : 1441.95324707031
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 1223.07360839844,
                    "y" : 1518.87658691406
                },
                {
                    "type":"viev",
                    "label": "1234",
                    "color": "#8695A6",
                    "x" : 1323.07409667969,
                    "y" : 1576.56921386719
                },
                {
                    "type":"viev",
                    "label": "1234",
                    "color": "#8695A6",
                    "x" : 1242.30444335938,
                    "y" : 1565.03063964844
                },
                {
                    "type":"viev",
                    "label": "1234",
                    "color": "#8695A6",
                    "x" : 1680.76782226563,
                    "y" : 1161.18286132813
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 1619.22912597656,
                    "y" : 976.566650390625
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 1630.76770019531,
                    "y" : 1034.25915527344
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 1830.7685546875,
                    "y" : 972.720458984375
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 1746.15270996094,
                    "y" : 1057.33618164063
                }
            ]
        },
        {
            "planId": "624b2a5deebff930f48704f2",
            "planUrl": "/plan-2.jpg",
            "planName": "План 23 этажа",
            "markers": [
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 2315.38598632813,
                    "y" : 695.796203613281
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 2350.00144800883,
                    "y" : 553.48794730665
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 2465.38647460938,
                    "y" : 568.872619628906
                },
                {
                    "type":"block",
                    "label": "345",
                    "color": "#FF9D28",
                    "x" : 2303.84741210938,
                    "y" : 530.410888671875
                }
            ]
        }
    ]
   

}

export default function dispatch(state = initialState, action) {
    switch (action.type) {
        case 'add_icon': 
            state.icons.push(action.payload)
            return { ...state, icons: state.icons}
        case 'set_plan_size': return { ...state, plan_size: action.payload}
        case 'set_distance': return { ...state, distance: action.payload}
        case 'set_plan_index': return { ...state, plan_index: action.payload}
        case 'set_scale': return { ...state, distance: 50/action.payload, scale: action.payload}
        case 'set_group_arr': return { ...state, group_arr: action.payload}
        case 'set_new_arr': return { ...state, new_arr: action.payload}
        case 'set_data_size': return { ...state, data_size: action.payload}
        case 'clear_hidden': return { ...state, group_arr: state.group_arr.map(el=> {return {...el, hidden:true}})}
        case 'set_hidden': return { ...state, group_arr: state.group_arr.map((el,index)=> { if (index === action.payload) {return {...el, hidden:!el.hidden}} else {return {...el, hidden:true}} })}
        case 'set_hover': return { ...state, new_arr: state.new_arr.map((el,index)=> { if (index === action.payload) {return {...el, hover:true}} else {return {...el, hover:false}} })}
        case 'clear_hover': return { ...state, new_arr: state.new_arr.map((el)=> { return {...el, hover:false}} )}
        default: return state
    }
}