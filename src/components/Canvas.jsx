import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { addElement, undo, redo } from '../store/canvasSlice';
import Element from './Element';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const template = {
  sections: [
    { id: 'header', title: 'Header' },
    { id: 'body', title: 'Body' },
    { id: 'footer', title: 'Footer' },
  ],
};

const Section = ({ section, elements, onSelect }) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'element',
    drop: (item) => {
      const newElement = {
        id: Date.now(),
        sectionId: section.id,
        type: item.type,
        props: getDefaultProps(item.type),
      };
      dispatch(addElement(newElement));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  function getDefaultProps(type) {
    switch (type) {
      case 'text':
        return { text: 'Sample Text', fontSize: '16px', color: '#000000' };
      case 'image':
        return { src: 'https://placehold.co/100x100', width: '100%' };
      case 'button':
        return { label: 'Click Me', fontSize: '16px', color: '#ffffff', backgroundColor: '#3b82f6' };
      default:
        return {};
    }
  }

  return (
    <Card
      ref={drop}
      className={`m-4 p-4 transition-colors duration-200 ${isOver ? 'bg-green-50' : 'bg-white'}`}
    >
      <h4 className="text-md font-semibold mb-2">{section.title}</h4>
      {elements.length === 0 && (
        <p className="text-gray-500">Drag elements here</p>
      )}
      <div className="space-y-2">
        {elements.map((el) => (
          <Card
            key={el.id}
            onClick={() => onSelect(el.id)}
            className="p-2 border border-border hover:border-primary cursor-pointer"
          >
            <Element el={el} />
          </Card>
        ))}
      </div>
    </Card>
  );
};

const Canvas = ({ onSelect }) => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.canvas.elements);
  const canUndo = useSelector((state) => state.canvas.historyIndex > 0);
  const canRedo = useSelector((state) => state.canvas.historyIndex < state.canvas.history.length - 1);

  return (
    <div className="flex-1 m-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Canvas</h3>
        <div classClass="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => dispatch(undo())}
            disabled={!canUndo}
          >
            Undo
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => dispatch(redo())}
            disabled={!canRedo}
          >
            Redo
          </Button>
        </div>
      </div>
      {template.sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          elements={elements.filter((el) => el.sectionId === section.id)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default Canvas;