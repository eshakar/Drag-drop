import { useDrag } from 'react-dnd';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const elementTypes = ['text', 'image', 'button'];

const DraggableElement = ({ type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'element',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card
      ref={drag}
      className={`m-2 transition-opacity duration-200 ${isDragging ? 'opacity-50' : 'opacity-100'} hover:bg-gray-50`}
    >
      <CardContent className="p-4">
        <Button variant="ghost" className="w-full text-left">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      </CardContent>
    </Card>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-50 border-r border-border p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Toolbox</h3>
      {elementTypes.map((type) => (
        <DraggableElement key={type} type={type} />
      ))}
    </div>
  );
};

export default Sidebar;