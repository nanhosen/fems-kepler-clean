import {LoadDataModalFactory, withState, ModalTabsFactory} from 'kepler.gl/components';
import styled from 'styled-components';
import { getLatestData, getRedshiftDataMonthly, getRedshiftDataFireSeason, selectedData } from '../../actions'
import { useDispatch } from 'react-redux' //delete this when do action the right way
import React, { useEffect, useState } from "react";



function ImageBlock({sample, onClick}){
  // console.log('in image block', sample, {sample})
  return(
    <StyledSampleMap id={sample.id} className="sample-map-gallery__item">
      <div className="sample-map">
        <div className="sample-map__image" onClick={onClick}>
          { <img src={sample.imageUrl} />}
        </div>
        <div className="sample-map__title">{sample.label}</div>
        <div className="sample-map__size">
         {sample.message} sample message should be here
        </div>
        <StyledImageCaption className="sample-map__image__caption">
          {sample.label}
        </StyledImageCaption>
      </div>
    </StyledSampleMap>
   )
}

const AllBlocks = ({modelInfoArray}) =>{
  const [model, setModel] = useState()
  // console.log('in all blocks', modelInfoArray)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log('selectedmodel', model)
    localStorage.setItem('model' ,model)
    dispatch(getRedshiftDataFireSeason(model))
    dispatch(selectedData({model}))
  },[model])
  // async function onClickAction(model){
  //   console.log('clicked model selecected', model)
  //   await dispatch(getRedshiftDataFireSeason(model))
  //   await dispatch(selectedData({model}))
  // }
  return (
    <div>
      {
        modelInfoArray ? (
          <StyledSampleGallery className="sample-map-gallery">
            {modelInfoArray.map((sample,i) => 
              <ImageBlock 
                sample = {sample} 
                key = {i} 
                onClick={() => setModel(sample.model)}
              />
            )}
          </StyledSampleGallery>   
        ): 'bye'
      }
    </div>
   )
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];


const modelInfoArray = [
  {
    // imageUrl:'https://www.hakaimagazine.com/wp-content/uploads/aabr_thumb-1.jpg',
    imageUrl:'https://s3.amazonaws.com/uber-static/kepler.gl/sample/nyctrips.png',
    label: 'fuel model Y',
    // message: 'this will load ERC for fuel model whyyyyy?',
    message: 'this will load ERC for fuel model Y',
    id: 1,
    model: 'Y'
  },
  {
    // imageUrl:'https://cms.qz.com/wp-content/uploads/2019/08/star-turtle-e1565615666276.jpg?quality=75&strip=all&w=1200&h=900&crop=1',
    imageUrl:'https://s3.amazonaws.com/uber-static/kepler.gl/sample/ukcommute.png',
    label: 'fuel model X',
    // message: 'this will load ERC for fuel model Ex!!!',
    message: 'this will load ERC for fuel model X',
    id:2,
    model: 'X'
  },
  {
    // imageUrl:'https://lh3.googleusercontent.com/WEVaxizETKCHMPxtHT1nQLzclTpvUU_Ape7n8UeBOFulvIxMHSrb7wLQNVmRT8RVipUgqcjLGlAW3gaDQmyj=s600-c',
    imageUrl:'https://s3.amazonaws.com/uber-static/kepler.gl/sample/movement-pittsburgh.png',
    label: 'fuel model W',
    message: 'this will load ERC for fuel model W',
    id:2,
    model: 'W'
  },
  {
    // imageUrl:'https://www.gannett-cdn.com/media/2019/05/20/USATODAY/usatsports/Turtle-Marriott-PV.jpg?width=2560',
    imageUrl:'https://s3.amazonaws.com/uber-static/kepler.gl/sample/sftrees.png',
    label: 'fuel model V',
    message: 'this will load ERC for fuel model V',
    id:2,
    model: 'V'
  },
  {
    // imageUrl:'https://www.gannett-cdn.com/media/2019/05/20/USATODAY/usatsports/Turtle-Marriott-PV.jpg?width=2560',
    imageUrl:'https://s3.amazonaws.com/uber-static/kepler.gl/sample/sfcontour.png',
    label: 'fuel model Z',
    message: 'this will load ERC for fuel model Z',
    id:2,
    model: 'Z'
  }
]

const DummyComp = () => ( <AllBlocks modelInfoArray={modelInfoArray} />);
// const CustomLoadDataModalFactory = () => DummyComp
// const CustomLoadDataModalFactory = () => DummyComp

      // <ModalTabs />
const TryThisFirst = (ModalTabs) => {
  const ReturnComp = () => (
    <>
      <AllBlocks modelInfoArray={modelInfoArray} />
    </>  
  );
  return ReturnComp;
};



// export default CustomLoadDataModalFactory.deps = [ModalTabsFactory]
export default DummyComp


// const numFormat = format(',');

const StyledSampleGallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledSampleMap = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: black;
  line-height: 22px;
  width: 30%;
  max-width: 480px;
  margin-bottom: 50px;

  .sample-map__image {
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 12px;
    opacity: 0.9;
    transition: opacity 0.4s ease;
    position: relative;
    line-height: 0;

    img {
      max-width: 100%;
      max-height: 100%;
      width:1590px;
      height:125px
    }
    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }

  .sample-map__size {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
  }

  :hover {
    .sample-map__image__caption {
      opacity: 0.8;
      transition: opacity 0.4s ease;
    }
  }
`;

const StyledImageCaption = styled.div`
  color: black;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 10px;
  opacity: 0;
`;

const StyledError = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 16px;
`;

        // if(modelInfoArray){

        // }
        // else{

        // }
        // modelInfoArray ? 
        //   for(const property in modelInfoArray){
        //     <ImageBlock sample = {modelInfoArray[property]} />
        //   }
        //  :'no info'