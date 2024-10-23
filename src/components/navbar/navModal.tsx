
//Atoms
import { useAtom } from "jotai";
import { navModalAtom } from '../../store/navModalAtom';

export default function NavModal() {
  const [isNavModalOpenned, setIsNavModalOpenned] = useAtom(navModalAtom);

  const closeNavModal = () => {
    setIsNavModalOpenned(false)
    
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50' onClick={() => closeNavModal()}>
    </div>
  )
}
