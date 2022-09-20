import './meteor.css';

const Meteor = ({x}) => {
    console.log("position x in component:", x)
    const style = {
        left: `${x}px`,
    }

return (
   <div className="meteor" style={style}>

   </div> 
)
}
export default Meteor;