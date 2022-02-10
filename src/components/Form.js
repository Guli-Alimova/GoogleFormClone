import styled from "styled-components";
import React, { useState } from 'react';
import { Container, Row } from "../styled";
import { Radio } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./form.css";
import Question from "./Question/Question";


const ForumWrapper = styled.section`
padding:30px 0;

`
const FormContent = styled.div`
background-color: #fff;
border: 1px solid #dadce0;
border-radius: 8px;
margin-bottom: 12px;
padding: 24px;
// max-width:600px;

`

const FroumRow = styled.div`
display:flex;
justify-content:end;
align-items:center;

`

const Form = () => {
  // const [selectedValue, setSelectedValue] = useState('');
  
  const [score, setScore] = useState(0)
const handleClick = async (e) => {
const allValue = +e.target.value
setScore(prev => allValue)



  // console.log( e.target.value)
  // const attribut = e.target.attributes.getNamedItem("data-id").value;


  // console.log(e.target.attributes.getNamedItem("data-id").value)
  // const id = e.target.attributes.getNamedItem("data-id").value;
  // console.log(id)
}

 
// From content 
/*
1. title string
questions []

[
  {
    title: 'asasdasd',
    option: []
  }
]
*/


  return <div>
    <p>{score}</p>
    <ForumWrapper>
      <Container>
      <form>

      <Question handleClick={handleClick}/>


      <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Хозирги ҳолатингизни 4 ой олдинги ҳолат билан солиштирганда қандай баҳолайсиз? </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="now-helth"
        onChange={handleClick}
      >
        <FormControlLabel data-id={1} value={1}  control={<Radio/>} label="Аввалгидан анча яхши" />
        <FormControlLabel data-id={2} value={2}  control={<Radio />} label="Аввалгидан бироз яхши" />
        <FormControlLabel data-id={3} value={3}  control={<Radio/>} label="Деярли аввалгидек" />
        <FormControlLabel data-id={4} value={4} control={<Radio/>} label="Аввалгидан ёмонрок" />
        <FormControlLabel data-id={5} value={5} control={<Radio/>} label="Аввалгидан жуда ёмон" />
      </RadioGroup>
    </FormControl>
        </FormContent>

  

        <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{width:"971px"}}>Кейинги саволлар сизнинг одатий кунингизда дуч келадиган жисмоний юкламалар билан боғлиқ.
       Хозирги вақтда сизнинг соғлиғингиз ҳолати қуйида келтирилган жисмоний юкламаларни бажаришда қийинчилик туғдирадими (чегараланганми)? 
       Агар шундай бўлса қай даражада намоён бўлади? </FormLabel>
       <FroumRow>
         <p style={{width:"83px", marginRight:"144px"}}>Ха, яққол чегараланган</p>
         <p  style={{width:"85px", marginRight:"96px"}}>Ха бироз чегараланган</p>
         <p  style={{width:"103px"}}>Йўк, умуман чегараланмаган.</p>
       </FroumRow>
       <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="then-helth"
        onChange={handleClick}
        
      >
        
        <Row>
        <p style={{width:"313px"}}>Югуриш, оғир юк кўтариш, спортнинг куч сарф этувчи турлари билан шуғулланиш каби оғир жисмоний юкламалар</p>
        <FormControlLabel
   
          control={<Radio />}
          label=""
          // labelPlacement="top"
          data-id={1} 
          value={1}
        />
         <FormControlLabel
         
          control={<Radio />}
          label=""
          // labelPlacement="top"
          data-id={2} 
          value={2}
     
        />
           <FormControlLabel

          control={<Radio />}
          label=""
          // labelPlacement="top"
          data-id={3} 
          value={3}

        />
  

        </Row>

        <Row>
        <p style={{width:"313px"}}>Столни суриш, чангюткич билан ишлаш, мева ва резаворларни териш каби ўртача жисмоний юкламалар</p>
        <FormControlLabel
           data-id={1} 
           value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"

 
        />
              <FormControlLabel
           data-id={2} 
           value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
              <FormControlLabel
          data-id={3} 
          value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
      
        </Row>

        <Row>
        <p style={{width:"313px"}}>Махсулотлар солинган сумкани кўтариш ёки кўтариб юриш</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
          <FormControlLabel
          data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
          <FormControlLabel
          data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />

        </Row>

        <Row>
        <p style={{width:"313px"}}>Бир қанча зинапоядан пиёда кўтарилиш</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
            <FormControlLabel
           data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
            <FormControlLabel
           data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
       
        </Row>

        <Row>
        <p style={{width:"313px"}}>Битта зинапоядан пиёда кўтарилиш</p>
        <FormControlLabel
         data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
  
        />
            <FormControlLabel
         data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
            <FormControlLabel
      data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
        </Row>

        <Row>
        <p style={{width:"313px"}}>Олдинга энгашиш, тиззада туриш, чўккалаб ўтириш</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
          <FormControlLabel
           data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
          <FormControlLabel
          data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"
 
        />
        </Row>

        <Row>
        <p style={{width:"313px"}}>Бир километрдан ортиқ масофага юриш</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
              <FormControlLabel
          data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
              <FormControlLabel
          data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
        </Row>

        
        <Row>
        <p style={{width:"313px"}}>200 метрдан ортиқ масофага юриш</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
          <FormControlLabel
           data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
          <FormControlLabel
          data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
 
        </Row>

        <Row>
        <p style={{width:"313px"}}>100 метр масофага юриш</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
             <FormControlLabel
          data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
             <FormControlLabel
          data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />

        </Row>

        <Row>
        <p style={{width:"313px"}}>Мустақил равишда ювиниш ва кийиниш</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
             <FormControlLabel
        data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
             <FormControlLabel
          data-id={3} value={3}
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
  
        </Row>

      </RadioGroup>
    </FormControl>
        </FormContent>   


<FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{width:"971px"}}>Охирги 4 ҳафта ичида кундалик юмушларни бажаришда қийинчилик туғилдими, нима сабабдан?  </FormLabel>
       <FroumRow>
         <p style={{ marginRight:"300px"}}>Ха</p>
         <p  style={{paddingRight:"10px"}}>Йўк</p>
       </FroumRow>
       <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="work"
        onChange={handleClick}
      
      >
        
        <Row>
        <p style={{width:"313px"}}>Мўлжалингиздан кўра камроқ иш бажардингиз</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
  
        />
          <FormControlLabel
        data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
        </Row>

        <Row>
        <p style={{width:"313px"}}>Меҳнат фаолияти ёки бошқа юмушларни бажариш вақтини қисқартиришга тўғри келди</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
            <FormControlLabel
          data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
       
        </Row>

        <Row>
        <p style={{width:"313px"}}>Сиз муайян иш турини ёки бошқа бир фаолиятни бажаришга чекландингиз</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
                 <FormControlLabel
          data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
       
        </Row>
    
        <Row>
        <p style={{width:"313px"}}>Ўз ишингизни ёки бошқа юмушларни бажаришда қийинчиликка дуч келдингиз (масалан қўшимча уруниш талаб этади)</p>
        <FormControlLabel
         data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
          <FormControlLabel
         data-id={2} value={2}
          label=""
          // labelPlacement="top"
      
        />
       
        </Row>
        </RadioGroup>
       </FormControl>
        </FormContent>


{/* 
        <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{width:"971px"}}>Охирги 4 ҳафта ичида эмоционал ҳолатингиз (кайфиятингиз) ўз ишингиз ёки бошқа кундалик
       юмушларни бажаришда қийинчилик туғдирдими, нима сабабдан?</FormLabel>
       <FroumRow>
       <p style={{ marginRight:"300px"}}>Ха</p>
         <p  style={{paddingRight:"10px"}}>Йўк</p>
       </FroumRow>
       <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="emotional"
        onChange={handleClick}

      >
        
        <Row>
        <p style={{width:"313px"}}>Меҳнат фаолияти ёки бошқа юмушларни бажариш вақтини қисқартиришга тўғри келди</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
              <FormControlLabel
          data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
    
     
        </Row>

        <Row>
        <p style={{width:"313px"}}>Мўлжалингиздан кўра камроқ иш бажардингиз</p>
        <FormControlLabel
         data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
  
        />
                 <FormControlLabel
        data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
   
  
        </Row>

        <Row>
        <p style={{width:"313px"}}>Ўз ишингизни ёки бошқа юмушларни одатий тартибда бажара олмадингиз</p>
        <FormControlLabel
          data-id={1} value={1}
          control={<Radio />}
          label=""
          // labelPlacement="top"
  
        />
          <FormControlLabel
         data-id={2} value={2}
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
       
        </Row>
    
        </RadioGroup>
       </FormControl>
        </FormContent>  */}


    {/* <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Охирги 4 ҳафта ичида жисмоний (соғлиғингиз) ва эмоционал ҳолатингиз (кайфиятингиз) сизга оила аъзоларингиз, дўстларингиз, қўшниларингиз ва (ёки) хамкасабаларингиз билан бирга вақт ўтказишингизга қанчалик тўсқинлик қилди? </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="physical-work"
        onChange={handleClick}

      >
        <FormControlLabel  data-id={1} value={1} control={<Radio />} label="Мутлақо (тўсқинлик қилмади)" />
        <FormControlLabel  data-id={2} value={2} control={<Radio/>} label="Бироз" />
        <FormControlLabel  data-id={3} value={3} control={<Radio />} label="Ўртача" />
        <FormControlLabel  data-id={4} value={4} control={<Radio />} label="Сезиларли" />
        <FormControlLabel  data-id={5} value={5} control={<Radio />} label="Жуда" />
      </RadioGroup>
    </FormControl>
        </FormContent>   */}

{/* 
   <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Охирги 4 ҳафта ичида қанчалар кучли жисмоний оғриқ ҳис қилдингиз? </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="physical pain"
        onChange={handleClick}
 
      >
        <FormControlLabel data-id={1} value={1} control={<Radio />} label="Мутлақо сезмадим" />
        <FormControlLabel data-id={2} value={2} control={<Radio />} label="Жуда оз" />
        <FormControlLabel data-id={3} value={3} control={<Radio  />} label="Оз даражада" />
        <FormControlLabel data-id={4} value={4}control={<Radio />} label="Ўртача" />
        <FormControlLabel data-id={5} value={5}control={<Radio />} label="Кучли" />
        <FormControlLabel data-id={6} value={6} control={<Radio />} label="Жуда кучли" />
      </RadioGroup>
    </FormControl>
        </FormContent> */}


         {/* <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Охирги 4 ҳафта ичида сизни безовта қилган оғрик қай даражада одатий ишингизни бажаришга халақит берди (уй ва уйдан ташкарида) </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="annoying pain"
        onChange={handleClick}

      >
        <FormControlLabel data-id={1} value={1}  control={<Radio />} label="Мутлақо " />
        <FormControlLabel data-id={2} value={2}  control={<Radio />} label="Бироз" />
        <FormControlLabel data-id={3} value={3}  control={<Radio />} label="Ўртача" />
        <FormControlLabel data-id={4} value={4}  control={<Radio  />} label="Кучли" />
        <FormControlLabel data-id={5} value={5}  control={<Radio  />} label="Жуда кучли" />
      </RadioGroup>
    </FormControl>
        </FormContent>  */}
 
{/* 
    <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{width:"971px"}}>Кейинги савол сиз ўзингизни охирги 4 хафта ичида қандай ҳис қилганлигингиз ва кайфиятингиз қандай бўлганлиги тўғрисида. 
      Илтимос қуйидаги саволларга жавоб беришда ҳиссиётингизга энг мос келадиган битта жавобни танланг. </FormLabel>
       <FroumRow>
         <p style={{width:"83px", marginRight:"38px"}}>Хар доим	</p>
         <p  style={{width:"85px", marginRight:"27px"}}>Купинча</p>
         <p  style={{width:"103px"}}>Тез-тез</p>
         <p style={{width:"83px", marginRight:"24px"}}>Баъзида</p>
         <p  style={{width:"85px", marginRight:"22px"}}>Кам холларда</p>
         <p  style={{width:"103px"  ,   marginRight: "-43px"}}>Хеч қачон</p>
       </FroumRow>
       <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name=" mood"
        onChange={handleClick}
     
      >
        
        <Row>
        <p style={{width:"313px"}}>Югуриш, оғир юк кўтариш, спортнинг куч сарф этувчи турлари билан шуғулланиш каби оғир жисмоний юкламалар</p>
        <FormControlLabel
          data-id={1} value={1} 
          control={<Radio />}
          label=""
     
        />
              <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
       
        />
            <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
       
        />
            <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          
        />
            <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
         
        />
            <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
    
  
        />

        </Row>

        <Row>
        <p style={{width:"313px"}}>Столни суриш, чангюткич билан ишлаш, мева ва резаворларни териш каби ўртача жисмоний юкламалар</p>
        <FormControlLabel
          data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
                   <FormControlLabel
           data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
                   <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
       
        />
                   <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
                   <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
                   <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
          
        />
        </Row>

        <Row>
        <p style={{width:"313px"}}>Махсулотлар солинган сумкани кўтариш ёки кўтариб юриш</p>
        <FormControlLabel
          data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
 
        />
         <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
           <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
           <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
           <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
           <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
       
        </Row>

        <Row>
        <p style={{width:"313px"}}>Бир қанча зинапоядан пиёда кўтарилиш</p>
        <FormControlLabel
           data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
           <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
             <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
           <FormControlLabel
         data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
           <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
            <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
        </Row>

        <Row>
        <p style={{width:"313px"}}>Битта зинапоядан пиёда кўтарилиш</p>
        <FormControlLabel
         data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
           <FormControlLabel
        data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
            <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
          <FormControlLabel
         data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
          <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
                <FormControlLabel
           data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
        </Row>

        <Row>
        <p style={{width:"313px"}}>Олдинга энгашиш, тиззада туриш, чўккалаб ўтириш</p>
        <FormControlLabel
      data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
           <FormControlLabel
          data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
             <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
                  <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
            <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
          <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
       
        </Row>

        <Row>
        <p style={{width:"313px"}}>Бир километрдан ортиқ масофага юриш</p>
        <FormControlLabel
       data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
           <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
             <FormControlLabel
           data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
              <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
                <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
                  <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
         
        />
        </Row>

        
        <Row>
        <p style={{width:"313px"}}>200 метрдан ортиқ масофага юриш</p>
        <FormControlLabel
         data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
          <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
          <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
              <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
   
        />
              <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
              <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
     
        />
 
        </Row>

        <Row>
        <p style={{width:"313px"}}>100 метр масофага юриш</p>
        <FormControlLabel
          data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
           <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
  
        />
          <FormControlLabel
         data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
  
        />
          <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
          <FormControlLabel
        data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
        <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
        </Row>

        <Row>
        <p style={{width:"313px"}}>Мустақил равишда ювиниш ва кийиниш</p>
        <FormControlLabel
          data-id={1} value={1} 
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
              <FormControlLabel
         data-id={2} value={2} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
        
        />
              <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
               <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
      
        />
               <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
          // labelPlacement="top"

        />
               <FormControlLabel
          data-id={6} value={6} 
          control={<Radio />}
          label=""
          // labelPlacement="top"
    
        />
    
      
        </Row>

      </RadioGroup>
    </FormControl>
        </FormContent> */}
{/* 
    <FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Охирги 4 ҳафта давомидасизни жисмоний ва эмоционал ҳолатингиз одамлар билан (дўстларингиз ва қариндошларингиз ва х.к ) фаол мулоқотда бўлишга қанчалик ҳалақит берди? </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="psyical-emotional"
        onChange={handleClick}
    
      >
        <FormControlLabel data-id={1} value={1}  control={<Radio />} label="Ҳар доим " />
        <FormControlLabel data-id={2} value={2}  control={<Radio  />} label="Купинча" />
        <FormControlLabel data-id={3} value={3}  control={<Radio />} label="Баъзида" />
        <FormControlLabel data-id={4} value={4}  control={<Radio />} label="Кам ҳолатда" />
        <FormControlLabel data-id={5} value={5}  control={<Radio  />} label="Ҳеч қачон" />
      </RadioGroup>
    </FormControl>
        </FormContent>   */}


{/* 
<FormContent>
          <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{width:"971px"}}>Қуйида келтирилган жумлалардан қайсилари сизга нисбатан мос келади ёки келмайди. </FormLabel>
       <FroumRow>
         <p style={{width:"83px", marginRight:"38px"}}>Худди шундай</p>
         <p  style={{width:"85px", marginRight:"32px"}}>Деярли шундай</p>
         <p  style={{width:"103px", marginRight:"27px"}}>Билмайман</p>
         <p style={{width:"97px", marginRight:"24px"}}>Менимча ундай эмас</p>
         <p  style={{width:"98px", marginRight:"-28px"}}>Ундай эмас</p>
       
       </FroumRow>
       <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="goood"
        onChange={handleClick}
     
      >
        
        <Row> 
        <p style={{width:"313px"}}>Мен бошқаларга нисбатан касалликка мойилроқман деб ўйлайман</p>
        <FormControlLabel
         data-id={1} value={1} 
          control={<Radio />}
          label=""
       
        />
          <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
        
        />
          <FormControlLabel
          data-id={3} value={3} 
          control={<Radio />}
          label=""
     
        />
             <FormControlLabel
          data-id={4} value={4} 
          control={<Radio />}
          label=""
        
        />
             <FormControlLabel
          data-id={5} value={5} 
          control={<Radio />}
          label=""
       
        />
      
        </Row>

        <Row>
        <p style={{width:"313px"}}>Мен соғлиғим ёмонлашади деган ҳавотирдаман</p>
        <FormControlLabel
          data-id={1} value={1} 
          control={<Radio />}
          label=""
         
        />
          <FormControlLabel
          data-id={2} value={2} 
          control={<Radio />}
          label=""
       
        />     
          <FormControlLabel
        data-id={3} value={3} 
        control={<Radio />}
        label=""
     
      />
        <FormControlLabel
        data-id={4} value={4} 
        control={<Radio />}
        label=""
        
      />
          <FormControlLabel
        data-id={5} value={5} 
        control={<Radio />}
        label=""
    
      />

        </Row>

        <Row>
        <p style={{width:"313px"}}>Мени соғлиғим кўпчилик танишларимникидан ёмон эмас.</p>
        <FormControlLabel
        data-id={1} value={1} 
        control={<Radio />}
        label=""
      
      />
        <FormControlLabel
        data-id={2} value={2} 
        control={<Radio />}
        label=""
      
      />
       <FormControlLabel
        data-id={3} value={3} 
        control={<Radio />}
        label=""
     
      />
       <FormControlLabel
        data-id={4} value={4} 
        control={<Radio />}
        label=""
     
      />
          <FormControlLabel
        data-id={5} value={5} 
        control={<Radio />}
        label=""
       
      />
        
        </Row>

        <Row>
        <p style={{width:"313px"}}>Мени соғлиғим аъло даражада</p>
        <FormControlLabel
    data-id={1} value={1} 
        control={<Radio />}
        label=""
      
      />
            <FormControlLabel
        data-id={2} value={2} 
        control={<Radio />}
        label=""
      
      />
            <FormControlLabel
        data-id={3} value={3} 
        control={<Radio />}
        label=""
    
      />
           <FormControlLabel
        data-id={4} value={4} 
        control={<Radio />}
        label=""
   
  
      />
           <FormControlLabel
        data-id={5} value={5} 
        control={<Radio />}
        label=""
  

      />
     
        </Row>

      </RadioGroup>
    </FormControl>
        </FormContent>   */}
        </form> 
          <div className="result">
               <span className="all">Жами:</span> 
          <span className="all">Натижа:{}</span> 
          </div>
       
      </Container>  
    </ForumWrapper>
  </div>;
};

export default Form;
