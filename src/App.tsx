import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { LogoReact } from './components/LogoReact';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-auto bg-gray-900 flex flex-col items-center justify-center text-gray-100 gap-12 pb-8">
      <header className="flex flex-col items-center">
        <LogoReact />

        <Heading size='lg' className="mt-4">Ignite Lab</Heading>

        <Text size='lg' className="text-gray-400 mt-1">Faça o login e comece a usar!</Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm gap-3">
        <label htmlFor="email" className="flex flex-col gap-2">
          <Text className="font-semibold">Endereço de e-mail:</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input id='email' type='email' placeholder='Digite seu email' />
          </TextInput.Root>
        </label>

        <label htmlFor="senha"  className="flex flex-col gap-2">
          <Text className="font-semibold">Sua senha:</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input id='password' type='password' placeholder='*******' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember-login"className="flex gap-5">
          <Checkbox id='remember-login'/>
          <Text size='sm' className="text-gray-200">Lembrar de mim por 30 dias.</Text>
        </label>

        <Button type='submit' className="mt-5">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center justify-center gap-4">
        <Text size='sm' asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>

        <Text size='sm' asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

