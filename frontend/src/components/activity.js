const Activity = (props) => {
    let activitiesInfo = props.Activities;

    return (
            <div className="cardActivity" style={{ backgroundImage: `url("${activitiesInfo.img}")` }}>   
                <div clasName="divEnjoy">{activitiesInfo.activity}</div>
            </div>
    );
};


export default Activity;