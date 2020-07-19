import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';
import {
    FcBusinessman,
    FcBusinesswoman,
    FcPhoneAndroid,
    FcPhone,
} from 'react-icons/fc';

const MyCard = ({details}) => {
    // const bgBrdrFontColor = (details.gender === 'male') ? 'blueTheme' : 'pinkTheme';
    let bgBrdrFontColor, userIcon;
    if (details.gender === 'male') {
        bgBrdrFontColor = 'blueTheme';
        userIcon = <FcBusinessman />
    } else if (details.gender === 'female') {
        bgBrdrFontColor = 'pinkTheme';
        userIcon = <FcBusinesswoman />
    }

    return(
        <Card className={bgBrdrFontColor}>
            <CardBody className="text-center vCardContainer">
                <div className="imgBlockContainer">
                    <div className="imgBlock">
                        <CardImg
                            top
                            width="150px"
                            height="150px"
                            src={details.picture?.large}
                            alt="Card image cap"
                            className="rounded-circle img-thumbnail"
                        />
                    </div>
                </div>
                <strong>
                    <CardTitle>
                        <span className="pr-1 h3">{userIcon}</span>
                        <span className="pr-1">{details.name?.title}.</span>
                        <span className="pr-1">{details.name?.first}</span>
                        <span className="">{details.name?.last}</span>
                    </CardTitle>
                    <CardSubtitle className="mb-1">
                        {details.email}
                    </CardSubtitle>
                </strong>
                <CardText className="cardAddr pt-2 mt-2">
                    <div>
                        <span className="pr-1">
                            {details.location?.street?.number},
                        </span>
                        <span className="pr-1">
                            {details.location?.street?.name},
                        </span>
                    </div>
                    <div>
                        <span className="pr-1">
                            {details.location?.city},
                        </span>
                        <span className="pr-1">
                            {details.location?.state},
                        </span>
                        <span>
                            {details.location?.postcode}
                        </span>
                    </div>
                    <div className="contactPhoneNumber pt-2 mt-2">
                        <span className="phoneNo pr-2">
                            <span className="pr-1 h6"><FcPhoneAndroid /></span>{details.phone}
                        </span>
                        <span className="phoneNo">
                            <span className="pr-1 h6"><FcPhone /></span>{details.cell}
                        </span>
                    </div>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard;