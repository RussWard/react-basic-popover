react-basic-popover


- This is a lightweight package to render a simple text popover message. The module consists of a single higher order component which takes in a standard react component, and returns a version of that component with event listeners for 'mouseenter' and 'mouseleave' events attached (composed component). When these events fire, they correspondingly append to or remove from the composed component a DOM node positioned at the lower left corner of the composed component, containing whatever text was passed to the composed component as props.message.