// App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person, ProfileProps } from './models/Person.model';
import PersonComponent from './PersonComponent';
import Card from 'react-bootstrap/Card';
import { Status } from './componments/Status';
import NestedComponent from './componments/NestedComponent';
import Header from './componments/Headers';
import Button from './componments/Button'

function App() {
  const student: Person = {
    name: 'John',
    age: 25,
    email:'example@email.com'
  }

   const profileData: ProfileProps = {
    person: student,
    message: 'This is a message from the parent component.'
  }

  const handleClick = () => {
    console.log('Button clicked');
  };

    return (
    <div>
      {/* added code starts */}
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Body>
          <PersonComponent {...profileData}/>
        </Card.Body>
      </Card>
      <Status />
      <Header>Welcome to the TypeScript Props Example</Header>
       <NestedComponent>
          <h3>This is a children component</h3>
          <Status />
      </NestedComponent>

      <Button onClick={handleClick}/>
    </div>
  );
}

export default App;
