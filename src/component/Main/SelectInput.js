import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SelectInput() {
  return (
    <>
      <Form>

        <div className='py-3 px-3 border'>
          <Form.Select size="lg" aria-label="Default select example">
            <option>Select Make</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>

        <div className='py-3 px-3 border'>
          <Form.Select size="lg" aria-label="Default select example">
            <option>Select Make</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>

        <div className='py-3 px-3 border'>
          <Form.Select size="lg" aria-label="Default select example">
            <option>Select Make</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="d-grid gap-2">
          <Button type='submit' className='purple-bg rounded-0' size="lg">
            Find My Parts
          </Button>
        </div>
      </Form>

    </>
  );
}

export default SelectInput;