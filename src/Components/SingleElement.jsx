import PropTypes from "prop-types";
export default function SingleElement({e}) {
   
    return (
        <div className="single-el">
            <h2>{e.name}</h2>
            <p>{e.email}</p>
            <p>{e.body}</p>
        </div>
    )
}
SingleElement.propTypes={
 e: PropTypes.object.isRequired
}