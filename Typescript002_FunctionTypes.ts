// Defino un tipo para error que sera un argumento en el callback.
type FunctionCallBackError = Error | null;
// Defino la estructura de la funcion que debe llegar en el argumento con nombre CallBack
// Esto es un Tipo Function o Function Type.  Recibira dos argumentos, y no retornara nada.
type FunctionCallBack = (
  error: FunctionCallBackError,
  response: Object
) => void;
//Definimos la funcion con sus argumentos y retorno
type FuncionArrow = (funcionCallBack: FunctionCallBack) => void;

//Llamo a los tipos dentro de una funcion principal, donde tenemos como argumento el
//callback, y de igual manera si no es null el callback hara elllamado con los argumentos
//que deben corresponder al tipo segun la definicion arriba.
function FuncionPrincipall(funcionCallback: FunctionCallBack): void {
  if (funcionCallback) funcionCallback(null, { code: '00' });
}

//Llamaremos a nuestra funcion como un arrow function.
const ArrowFunction: FuncionArrow = (callbackFunc: FunctionCallBack): void => {
  if (callbackFunc) callbackFunc(null, { code: '00' });
};
