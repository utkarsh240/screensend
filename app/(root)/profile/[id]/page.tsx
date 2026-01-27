import React from 'react'
import Header from '@/components/Header'


const page = async({params} : ParamsWithSearch) => {
  const {id} = await params;
  return (
    <div className='wrapper page'>
      <Header subHeader="utkarsh@me" title="Utkarsh" userImg="/assets/images/dummy.jpg"/>
      <section className='video-grid'>
      {dummyCards.map((card)=>(
              <VideoCard key={card.id}{...card}/>
      ))}
      
      </section>
      
    </div>
  )
}

export default page