// import logo from './logo.svg';
// import './App.css';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'Waiting1'
    },
    {
      id: "Waiting1",
      user: true,
      trigger: "Name"
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, Please select your issue',
      trigger: 'issues'
    },
    {
      id: 'issues',
      options: [
        {value: 'React',label: 'React',trigger: 'React'},
        {value: 'Angular',label: 'Angular',trigger: 'Angular'},
      ],

    },
    {
      id:'React',
      message:'Thanks for telling your react issue',
      end:true
    },
    {
      id:'Angular',
      message:'Thanks for telling your Angular issue',
      end:true  
    }
  ];



return (
  <>
  <div>
      <Segment floated="right">
      <ChatBot steps={steps} />
      </Segment>
  </div>
        
    </>
)
}

export default App;
