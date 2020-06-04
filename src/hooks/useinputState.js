import { useState } from 'react';

export default initialVal => {
     const [val, setval] = useState(initialVal);
     const handleChange = e => {
          setval(e.target.value)
     };
     const reset = () => {
          setval("")
     };
     return [val, handleChange, reset]
}
