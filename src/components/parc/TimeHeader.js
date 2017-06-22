

export default function TimeHeader({date}){

    return (
        <h3 className="ui dividing header">
            {date}
        </h3>
    );
}

TimeHeader.defaultProps = {
    date: '今天'
}
