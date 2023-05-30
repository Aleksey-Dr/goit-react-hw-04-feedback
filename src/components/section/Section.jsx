import PropTypes from 'prop-types';

const Section = ({ text, children }) => {
    return (
        <>
            <h2>{ text }</h2>
            {children}
        </>
    );
};

Section.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Section;