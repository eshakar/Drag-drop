import { Button } from './ui/button';

const Element = ({ el }) => {
  switch (el.type) {
    case 'text':
      return (
        <p style={{ fontSize: el.props.fontSize, color: el.props.color }}>
          {el.props.text}
        </p>
      );
    case 'image':
      return (
        <img
          src={el.props.src}
          alt="image"
          className="w-full h-auto rounded"
          style={{ width: el.props.width }}
        />
      );
    case 'button':
      return (
        <Button
          style={{
            fontSize: el.props.fontSize,
            color: el.props.color,
            backgroundColor: el.props.backgroundColor,
          }}
        >
          {el.props.label}
        </Button>
      );
    default:
      return null;
  }
};

export default Element;