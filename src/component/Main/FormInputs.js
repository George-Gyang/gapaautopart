import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';


function FormInputs() {
  return (
    <div className='border rounded-top'>
      <Form>
        <div className="p-2">
          <Form.Control type="text" placeholder="Search with Part Number" size='lg' />
        </div>
        <div className="d-grid gap-2">
          <Button type="submit" className='purple-bg rounded-0' size="lg">
            Find My Parts
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormInputs;