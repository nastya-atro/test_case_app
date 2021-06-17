import "./index.css";

const ContentList = ({content}) => {

  return (
    <div>
      <div className='Content_container'>{content ?content.map((c)=><div className='content'>
        <img src={c.image} alt={c.name}></img>
        
      </div>):null}</div>
 
      {console.info(`Available content: ${content}`)}
    </div>
  );
};

export default ContentList;
