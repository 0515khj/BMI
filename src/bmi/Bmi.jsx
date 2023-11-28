import './style.scss'
import BmiForm from './BmiForm';
import BmiList from './BmiList';
import {useRef, useState } from 'react';
import BmiTop from './BmiTop';

const Bmi = () => {

    const [data , setData]=useState([])
    const [edit , setEdit] = useState(false)

   
    const [ Mo , setMo]=useState({
        height:'' , name:'',weight:'',result:''
    })
    const no = useRef(1)
    const ref = useRef()

    const cp = (e) =>{
        const {name , value} = e.target
        setMo({
            ...Mo,
            [name]:value
        });
        if(name === 'height'){
            setHet(value);
        }else if (name === 'weight'){
            setWet(value)
        }
    };

    const cpcp =(e)=>{
        const {value} = e.target
        setData([...data].sort((a,b)=>a[value] > b[value] ? 1: -1))
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        /* if(!Mo.name || !Mo.height || !Mo.weight ) return */
        if(edit) {
            setData(data.map(item => item.id === Mo.id ? Mo : item))
            setEdit(false)
        }else{
            Mo.id = no.current++
            setData([...data,Mo])
        }
        setMo({height:'' , name:'',weight:'',result:''})
            ref.current.focus();
           
    }

     const Del =(id)=>{
        setData(data.filter(item=> item.id !==id))
     }

     

     const onEdit =(id) =>{
        setEdit(!edit)
        setMo(data.find(item => item.id === id))
     }


    return (
        <div className='khj'>
                <BmiTop cpcp={cpcp}/>
            <div className="boss">
                <BmiForm onSubmit={onSubmit}  cp={cp} Mo={Mo} ref={ref} edit={edit} />
                <BmiList data={data} Del={Del}  onEdit={onEdit}  />
            </div>
        </div>
    );
};

export default Bmi;