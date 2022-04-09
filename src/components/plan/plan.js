import React from 'react';
import { connect } from 'react-redux';
import './plan.css'

import Plan1 from './scheme/plan-1.jpg'
import Plan2 from './scheme/plan-2.jpg'




const planes = [Plan1, Plan1, Plan1, Plan2, Plan2]


class SimpleMarker extends React.Component {

    render() {

        return (
            <div >
                <svg width="50" height="70" viewBox="-5 -25 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className='shadow' x="1" y="-19" width="49" height="20" rx="2" fill={this.props.hover?(this.props.color):("white")} />
                    <text className="" textAnchor='middle' x='26' y="-4" fontWeight='bold' fontSize="12" fill={this.props.hover?("white"):(this.props.color)}>
                        № {this.props.label}
                    </text>

                    <path className='shadow' fillRule="evenodd" clipRule="evenodd" d="M38.0985 32.4111C41.6998 29.4772 43.9999 25.0072 43.9999 20C43.9999 11.1634 36.8364 4 27.9999 4C19.1633 4 11.9999 11.1634 11.9999 20C11.9999 25.0096 14.3022 29.4814 17.9064 32.4152H17.8944C21.0366 35.4021 23.9894 40.0794 26.119 44.3917C26.3978 45.1606 27.1347 45.71 27.9999 45.71C28.8684 45.71 29.6076 45.1565 29.8839 44.3829C32.0132 40.073 34.9647 35.3964 38.1053 32.4111H38.0985Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M36.8393 30.9014C36.8383 30.9014 36.8378 30.9001 36.8386 30.8994C39.9883 28.3323 41.9999 24.4219 41.9999 20.0417C41.9999 12.3098 35.7319 6.04175 27.9999 6.04175C20.2679 6.04175 13.9999 12.3098 13.9999 20.0417C13.9999 24.4231 16.0125 28.3344 19.1638 30.9016C19.1652 30.9027 19.1644 30.905 19.1625 30.905V30.905C19.1607 30.905 19.1599 30.9072 19.1612 30.9084C22.8545 34.42 25.872 38.6359 27.9983 43.3407C27.9987 43.3415 28 43.3413 28 43.3403V43.3403C30.1267 38.6335 33.1452 34.4161 36.8401 30.9034C36.8409 30.9027 36.8404 30.9014 36.8393 30.9014V30.9014Z" fill={this.props.color} fillOpacity='0.3' />
                    {this.props.type === "block" ? (<path fillRule="evenodd" clipRule="evenodd" d="M19.4999 22.7991C19.4998 22.0465 19.5003 21.0632 19.5024 19.9941L19.5081 17.198C19.5106 15.9399 20.1881 14.78 21.2827 14.1599L23.7655 12.7532L26.2806 11.3282C27.3509 10.7218 28.661 10.7218 29.7313 11.3282L34.7264 14.1584C35.8231 14.7798 36.501 15.943 36.501 17.2036L36.501 22.7964C36.501 24.057 35.8231 25.2202 34.7264 25.8416L32.2464 27.2467L29.731 28.6719C28.6609 29.2783 27.3511 29.2784 26.2809 28.6723L23.7826 27.2575C23.2525 26.9573 22.7444 26.6702 22.2824 26.4096C21.9172 26.2036 21.5808 26.0141 21.285 25.8477C20.1847 25.2284 19.5001 24.0651 19.4999 22.7991ZM21.5024 19.9981C21.5003 21.0655 21.4998 22.0473 21.4999 22.7987C21.5 23.339 21.792 23.838 22.2659 24.1047C22.3732 24.1651 22.4859 24.2285 22.6034 24.2947L31.9908 14.9072L28.7454 13.0683C28.2867 12.8084 27.7252 12.8084 27.2665 13.0683L22.2686 15.9C21.7995 16.1658 21.5091 16.6629 21.5081 17.202L21.5024 19.9981ZM33.7953 15.9312L24.4113 25.3152C24.5289 25.3817 24.648 25.4491 24.7682 25.5172L27.2664 26.932C27.7251 27.1917 28.2864 27.1917 28.7451 26.9318L33.7405 24.1015C34.2105 23.8352 34.501 23.3367 34.501 22.7964L34.501 17.2036C34.501 16.6847 34.233 16.2043 33.7953 15.9312Z" fill={this.props.color} />) : (null)}
                    {this.props.type === "viev" ? (<path fillRule="evenodd" clipRule="evenodd" d="M34.4778 28.879C34.3396 28.7945 31.0868 25.0087 30.1135 23.8188L30.0971 23.797C29.0057 24.5554 27.6797 25 26.2499 25C22.522 25 19.4999 21.9779 19.4999 18.25C19.4999 14.5221 22.522 11.5 26.2499 11.5C29.9778 11.5 32.9999 14.5221 32.9999 18.25C32.9999 19.6762 32.5576 20.999 31.8027 22.0889L31.8246 22.105C32.9947 23.0679 36.8078 26.3411 36.8878 26.4647C37.0527 26.7193 37.0336 27.2319 36.8439 27.6465C36.3948 28.6275 35.1374 29.2825 34.4778 28.879ZM26.2499 23C28.8732 23 30.9999 20.8734 30.9999 18.25C30.9999 15.6266 28.8732 13.5 26.2499 13.5C23.6265 13.5 21.4999 15.6266 21.4999 18.25C21.4999 20.8734 23.6265 23 26.2499 23ZM26.4999 15C25.9476 15 25.4999 15.4477 25.4999 16C25.4999 16.5523 25.9476 17 26.4999 17C26.9348 17 27.3073 17.2782 27.4442 17.6695C27.6267 18.1907 28.1972 18.4654 28.7184 18.283C29.2397 18.1006 29.5144 17.5301 29.332 17.0088C28.9231 15.8404 27.8109 15 26.4999 15Z" fill="#8695A6" />) : (null)}

                </svg>
            </div>
        )
    }

}


class GroupMarker extends React.Component {



    render() {

        const colors = this.props.colors
        
        colors.sort(function (a, b) {
            if (a.color > b.color) {
              return 1;
            }
            if (a.color < b.color) {
              return -1;
            }
            return 0;
          });

          const new_colors = colors.map((el,index,arr)=>{
            
            let pointStart = arr.filter((c_el,c_index) => c_index < index).length / arr.length * Math.PI * 2
            let pointEnd = pointStart + (1 / arr.length) * Math.PI * 2

            return {...el, pointStart: pointStart, pointEnd: pointEnd}

          }) 

        return (
            <div>
                <div className="popup" hidden={this.props.hidden}>
                    <div className="b-popup-content">
                        {colors.map((el,index) => {
                            return (
                                <div key={index} style={{ backgroundColor: el.color + "22" }} className='popup_element'>
                                    {el.type == "block" ? (
                                        <svg className="popup_element_icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.499894 12.7991C0.499777 12.0465 0.500252 11.0632 0.502403 9.99407L0.508058 7.19798C0.510603 5.93993 1.18813 4.78003 2.28271 4.15986L4.76551 2.75316L7.28058 1.32819C8.3509 0.721779 9.66099 0.721792 10.7313 1.32822L15.7264 4.15843C16.8231 4.77984 17.501 5.94303 17.501 7.2036L17.501 12.7964C17.501 14.057 16.8231 15.2202 15.7264 15.8416L13.2464 17.2467L10.731 18.6719C9.66088 19.2783 8.35108 19.2784 7.28086 18.6723L4.7826 17.2575C4.25254 16.9573 3.74443 16.6702 3.28235 16.4096C2.91717 16.2036 2.58077 16.0141 2.28503 15.8477C1.18471 15.2284 0.500092 14.0651 0.499894 12.7991ZM2.5024 9.9981C2.50025 11.0655 2.49978 12.0473 2.49989 12.7987C2.49998 13.339 2.79205 13.838 3.26589 14.1047C3.37322 14.1651 3.4859 14.2285 3.60336 14.2947L12.9908 4.9072L9.74536 3.06832C9.28666 2.80842 8.72519 2.80841 8.26648 3.0683L3.26862 5.89997C2.79952 6.16576 2.50914 6.66286 2.50805 7.20202L2.5024 9.9981ZM14.7953 5.93116L5.4113 15.3152C5.52894 15.3817 5.64799 15.4491 5.76817 15.5172L8.26643 16.932C8.7251 17.1917 9.28644 17.1917 9.74506 16.9318L14.7405 14.1015C15.2105 13.8352 15.501 13.3367 15.501 12.7964L15.501 7.2036C15.501 6.68469 15.233 6.20429 14.7953 5.93116Z" fill={el.color} />
                                        </svg>
                                    ) : (null)}

                                    {el.type == "viev" ? (
                                        <svg className="popup_element_icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.4778 17.879C15.3396 17.7945 12.0868 14.0087 11.1135 12.8188L11.0971 12.797C10.0057 13.5554 8.67969 14 7.24988 14C3.52195 14 0.499877 10.9779 0.499877 7.25C0.499877 3.52208 3.52195 0.500001 7.24988 0.500001C10.9778 0.500001 13.9999 3.52208 13.9999 7.25C13.9999 8.67618 13.5576 9.99904 12.8027 11.0889L12.8246 11.105C13.9947 12.0679 17.8078 15.3411 17.8878 15.4647C18.0527 15.7193 18.0336 16.2319 17.8439 16.6465C17.3948 17.6275 16.1374 18.2825 15.4778 17.879ZM7.24988 12C9.87323 12 11.9999 9.87335 11.9999 7.25C11.9999 4.62665 9.87323 2.5 7.24988 2.5C4.62652 2.5 2.49988 4.62665 2.49988 7.25C2.49988 9.87335 4.62652 12 7.24988 12ZM7.49988 4C6.94759 4 6.49988 4.44772 6.49988 5C6.49988 5.55229 6.94759 6 7.49988 6C7.9348 6 8.30733 6.27823 8.44424 6.66945C8.62668 7.19074 9.19716 7.46542 9.71844 7.28299C10.2397 7.10055 10.5144 6.53007 10.332 6.00879C9.92306 4.84038 8.8109 4 7.49988 4Z" fill={el.color} />
                                        </svg>) : (null)}
                                    <div className="popup_element_text">{el.label}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <svg onClick={(e) => { this.props.set_hidden(this.props.index) }} className="marker" xmlns="http://www.w3.org/2000/svg" width="37.5" height="37.5" viewBox="0 0 37.5 37.5" fill="white">

                    <circle className="marker_circle shadow" cx="18.75" cy="18.75" r="16" fill="white" />

                    {new_colors.map(el=>{

                        const d = "M " + (Math.sin(el.pointStart)*12.5+18.75) + " " + (Math.cos(el.pointStart)*12.5+18.75) + " a 12.5 12.5 0 0 0 " +(Math.sin(el.pointEnd)-Math.sin(el.pointStart))*12.5 + " " + (Math.cos(el.pointEnd)-Math.cos(el.pointStart))*12.5
console.log(d)
                        return (
                            <path d={d} stroke={el.color} strokeWidth="3" fill="none" />

                        )
                    })}

                    <circle className="group_marker_hovered_circle" cx="18.75" cy="18.75" r="11" />

                    <text textAnchor='middle' x='18.75' y="24" fontSize="13" fill='black'>
                        {this.props.number}
                    </text>
                </svg>
            </div>
        )
    }

}

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.scrollTo = React.createRef();

    }

    scrollIntoView = () => { this.scrollTo.current.scrollIntoView({ block: "center", inline: "center" }) }


    set_marker = () => {

        const distance = this.props.store.test.distance

        // создаем массив точек и добавляем в объекты признак группировки

        let new_arr = this.props.store.test.test_data[this.props.store.test.plan_index].markers.map((el, index, arr) => {

            if (arr.filter((cur_el, cur_index) => {
                return this.calc_distance(cur_el, el) < distance && cur_index != index
            }).length > 0) {
                return { ...el, hover: false, grouped: true }
            } else {
                return { ...el, hover: false, grouped: false }
            }
        })

        let left = new_arr.reduce((acc, el) => Math.min(acc, el.x), 100000)
        let right = new_arr.reduce((acc, el) => Math.max(acc, el.x), 0)
        let top = new_arr.reduce((acc, el) => Math.min(acc, el.y), 100000)
        let bottom = new_arr.reduce((acc, el) => Math.max(acc, el.y), 0)

        let data_size = {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        }

        this.props.set_data_size(data_size)

        // создаем массив групп
        let group_arr = []

        // перебираем массив точек
        new_arr.filter(el => el.grouped).forEach((el, index, arr) => {
            // первый элемент точно создает группу
            if (index === 0) {
                group_arr.push(el)
                // если поблизости нет уже обработанных точек то создаем группу
            } else {
                if (arr.filter((cur_el, cur_index) => {
                    return this.calc_distance(cur_el, el) < distance && cur_index < index
                }).length == 0) {
                    group_arr.push(el)
                }
            }

        });

        // каждой точке присваиваем ближайшую группу
        new_arr = new_arr.map((el) => {

            if (el.grouped) {

                let cur_group

                group_arr.forEach((element, ind, array) => {
                    let cur_dis = Math.pow((Math.pow((element.x - el.x), 2) + Math.pow((element.y - el.y), 2)), 0.5)
                    if (array.filter((cur_el, cur_index) => {
                        return this.calc_distance(cur_el, el) < cur_dis && cur_index !== ind
                    }).length == 0) {
                        cur_group = element
                    }
                });

                return { ...el, group: cur_group }
            } else {
                return el
            }
        })
        // уточняем координаты группы и добавляем массив вложенных в группу точек
        group_arr = group_arr.map((el) => {

            const group_markers = new_arr.filter(mark_el => mark_el.grouped).filter(mark_el => mark_el.group.x === el.x && mark_el.group.y === el.y)
            const group_x = group_markers.reduce((prev, cur) => prev + cur.x, 0) / group_markers.length
            const group_y = group_markers.reduce((prev, cur) => prev + cur.y, 0) / group_markers.length

            if (group_markers.length === 1) {
                new_arr = new_arr.map(new_arr_el => { if (new_arr_el.x === group_markers[0].x && new_arr_el.y === group_markers[0].y) { return { ...new_arr_el, grouped: false } } else { return new_arr_el } })
            }

            return { ...el, x: group_x, y: group_y, group_markers: group_markers, hidden: true }
        })

        group_arr = group_arr.filter((el) => el.group_markers.length > 1)



        this.props.set_new_arr(new_arr)
        this.props.set_group_arr(group_arr)
    }

    // установить новый план
    set_plan = (index) => {

        //получить изображение и вычислить размеры
        const img = new Image();
        img.src = planes[index];
        img.onload = () => {
            const data = {
                h: img.height,
                w: img.width
            }
            this.props.set_plan_size(data) 
            this.props.set_plan_index(index)
            this.set_marker() // вывести маркеры
            this.scrollIntoView() //проскролить до нужного места
        };

        let arr = this.props.store.test.test_data[index].markers // получить список всех маркеров для вычисления размера

        let left = arr.reduce((acc, el) => Math.min(acc, el.x), 100000)
        let right = arr.reduce((acc, el) => Math.max(acc, el.x), 0)
        let top = arr.reduce((acc, el) => Math.min(acc, el.y), 100000)
        let bottom = arr.reduce((acc, el) => Math.max(acc, el.y), 0)

        let data_height = bottom - top; // расстояние от саой левой до самой правой
        let data_width = right - left; // расстояние от саой нижней до самой верхней


        // вычислить обтимальный масштаб
        this.props.set_scale(Math.min(this.props.store.test.height / data_height * 0.7, this.props.store.test.width / data_width * 0.8, 1))
    }

    // при загрузке компонента установить первый план
    componentDidMount() {
        this.set_plan(0)
    }


    // функция вычисления расстояния между точками
    calc_distance = (el1, el2) => {
        return Math.pow((Math.pow((el1.x - el2.x), 2) + Math.pow((el1.y - el2.y), 2)), 0.5)
    }




    render() {



        // const min_scale = 0





        return (

            <div>
   
                {/* <input value={this.props.store.test.scale} onChange={(e) => this.props.set_scale(e.target.value)}></input> */}
                {/* <button onClick={(e) => { this.scrollIntoView() }}>scroll</button> */}
                {/* <button onClick={(e) => { this.set_marker() }}>set marker</button> */}      
                {/* <input value={this.props.store.test.distance} onChange={(e) => this.props.set_distance(e.target.value)}></input> */}
                
                <div className='scale_controller_button plus' style={{left: this.props.store.test.width-30}} onClick={(e) => {
                        this.props.set_scale(this.props.store.test.scale * 1.1)
                        this.set_marker()
                       }}>+</div>
                       
                    <div className='scale_controller_button minus' style={{left: this.props.store.test.width-30}} onClick={(e) => {
                        this.props.set_scale(Math.max(this.props.store.test.scale * 0.9, 0))
                        this.set_marker()
                    }}>-</div>

                <div className='plan_container' style={{width: this.props.store.test.width+'px', height:this.props.store.test.height+'px'}}>
               
                    <div className='plan_doc' style={{ position: 'relative', height: this.props.store.test.plan_size.h * this.props.store.test.scale, width: this.props.store.test.plan_size.w * this.props.store.test.scale }}>
                   
                    
                
                        <img onClick={(e) => { this.props.clear_hidden() }} className='plan_img' style={{ height: this.props.store.test.plan_size.h * this.props.store.test.scale, width: this.props.store.test.plan_size.w * this.props.store.test.scale }} src={planes[this.props.store.test.plan_index]} />

                        <div ref={this.scrollTo} style={{ position: 'absolute', top: ((this.props.store.test.data_size.top + this.props.store.test.data_size.bottom) / 2 * this.props.store.test.scale) + 'px', left: ((this.props.store.test.data_size.left + this.props.store.test.data_size.right) / 2 * this.props.store.test.scale) + 'px' }}></div>

                        {this.props.store.test.new_arr.map((i, index) => {
                            if (!i.grouped) {
                                return <div className='plan_marker' 
                                onMouseEnter={(e)=>{ this.props.set_hover(index)}} 
                                onMouseLeave={(e)=>{ this.props.clear_hover()}} 
                                    key={index} style={{ top: (i.y * this.props.store.test.scale) - 68 + 'px', left: (i.x * this.props.store.test.scale) - 30 + 'px' }}>
                                    <SimpleMarker type={i.type} label={i.label} color={i.color} hover={i.hover} />
                                </div>
                             }
                        })}

                        {this.props.store.test.group_arr.map((i, index) => {
                            return <div className='plan_marker' key={index} style={{ top: (i.y * this.props.store.test.scale) - 18.75 + 'px', left: (i.x * this.props.store.test.scale) - 18.75 + 'px' }}>
                                <GroupMarker number={i.group_markers.length} colors={i.group_markers} hidden={i.hidden} index={index} set_hidden={this.props.set_hidden} />
                            </div>
                         })}

                    </div>


                </div>

                <div className='plan_footer' style={{width:this.props.store.test.width+"px"}}>
                    <div className='plan_footer_button' onClick={(e) => {
                        this.set_plan(Math.max(this.props.store.test.plan_index - 1, 0))

                    }}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.20711 0.292893C7.59763 0.683418 7.59763 1.31658 7.20711 1.70711L2.91421 6L7.20711 10.2929C7.59763 10.6834 7.59763 11.3166 7.20711 11.7071C6.81658 12.0976 6.18342 12.0976 5.79289 11.7071L0.792893 6.70711C0.402369 6.31658 0.402369 5.68342 0.792893 5.29289L5.79289 0.292893C6.18342 -0.0976312 6.81658 -0.0976311 7.20711 0.292893Z" fill="#3391FF" />
                        </svg>

                    </div>
                    <div className='plan_footer_name'>{this.props.store.test.test_data[this.props.store.test.plan_index].planName} <div className='plan_footer_counter'> {this.props.store.test.plan_index + 1} / {this.props.store.test.test_data.length}</div></div>
                    <div className='plan_footer_button' onClick={(e) => { this.set_plan(Math.min(this.props.store.test.plan_index + 1, this.props.store.test.test_data.length - 1)) }}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.792893 11.7071C0.402369 11.3166 0.402369 10.6834 0.792893 10.2929L5.08579 6L0.792893 1.70711C0.402368 1.31658 0.402368 0.683417 0.792893 0.292893C1.18342 -0.0976315 1.81658 -0.0976315 2.20711 0.292893L7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792893 11.7071Z" fill="#3391FF" />
                        </svg>
                    </div>

                </div>
            </div>
        )

    }
}

export default connect(
    (state) => ({ store: state }),
    dispatch => (
        {
            add_icon: (param) => { dispatch({ type: 'add_icon', payload: param }) },
            set_distance: (param) => { dispatch({ type: 'set_distance', payload: param }) },
            set_plan_index: (param) => { dispatch({ type: 'set_plan_index', payload: param }) },
            set_plan_size: (param) => { dispatch({ type: 'set_plan_size', payload: param }) },
            set_scale: (param) => { dispatch({ type: 'set_scale', payload: param }) },

            set_group_arr: (param) => { dispatch({ type: 'set_group_arr', payload: param }) },
            set_new_arr: (param) => { dispatch({ type: 'set_new_arr', payload: param }) },
            set_data_size: (param) => { dispatch({ type: 'set_data_size', payload: param }) },
            set_hidden: (param) => { dispatch({ type: 'set_hidden', payload: param }) },
            clear_hidden: () => { dispatch({ type: 'clear_hidden' }) },
            set_hover: (param) => { dispatch({ type: 'set_hover', payload: param }) },
            clear_hover: () => { dispatch({ type: 'clear_hover'}) },
        }
    ))
    (Screen)
