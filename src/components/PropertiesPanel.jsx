import { useSelector, useDispatch } from 'react-redux';
import { updateElement } from '../store/canvasSlice';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px'];

const PropertiesPanel = ({ selectedId }) => {
  const dispatch = useDispatch();
  const element = useSelector((state) =>
    state.canvas.elements.find((el) => el.id === selectedId)
  );

  if (!element) {
    return (
      <Card className="w-80 m-4">
        <CardContent className="p-6">
          <p className="text-gray-500">Select an element to edit its properties</p>
        </CardContent>
      </Card>
    );
  }

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(updateElement({ id: selectedId, props: { [key]: value } }));
  };

  const handleSelectChange = (key, value) => {
    dispatch(updateElement({ id: selectedId, props: { [key]: value } }));
  };

  return (
    <Card className="w-80 m-4">
      <CardHeader>
        <CardTitle>Properties for {element.type}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {element.type === 'text' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="text">Text</Label>
              <Input
                id="text"
                name="text"
                value={element.props.text}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                value={element.props.fontSize}
                onValueChange={(value) => handleSelectChange('fontSize', value)}
              >
                <SelectTrigger id="fontSize">
                  <SelectValue placeholder="Select font size" />
                </SelectTrigger>
                <SelectContent>
                  {fontSizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color">Text Color</Label>
              <Input
                id="color"
                name="color"
                type="color"
                value={element.props.color}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        {element.type === 'image' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="src">Image URL</Label>
              <Input
                id="src"
                name="src"
                value={element.props.src}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                name="width"
                value={element.props.width}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        {element.type === 'button' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="label">Button Label</Label>
              <Input
                id="label"
                name="label"
                value={element.props.label}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                value={element.props.fontSize}
                onValueChange={(value) => handleSelectChange('fontSize', value)}
              >
                <SelectTrigger id="fontSize">
                  <SelectValue placeholder="Select font size" />
                </SelectTrigger>
                <SelectContent>
                  {fontSizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color">Text Color</Label>
              <Input
                id="color"
                name="color"
                type="color"
                value={element.props.color}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backgroundColor">Background Color</Label>
              <Input
                id="backgroundColor"
                name="backgroundColor"
                type="color"
                value={element.props.backgroundColor}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertiesPanel;