

export const BasicTypes = () => {

    const name: string = 'Fernando';
    const age: number = 37;
    const isActive: boolean =  true;

    const power: string[] = ['React', 'React Native', 'Angular', 'Vue', 'Qwik'];

  return (
    <>
         <h3>Tipos basicos</h3>
         { name } { age } { isActive ? 'true' : 'false' } 
         <br />
         { power.join(', ') }
    </>
  )
}
