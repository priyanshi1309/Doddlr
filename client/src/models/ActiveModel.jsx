import PoloShirt from '../models/PoloShirt'
import Shirt from '../models/Shirt';
import state from '../store';
import { useSnapshot } from 'valtio';
import Jeans from './Jeans';
import Hoodie from './Hoodie'
const ActiveModel = () => {
  const snap = useSnapshot(state)
  return (
    <>
        {snap.model === "Shirt" && <Shirt />}
        {snap.model === "PoloShirt" && <PoloShirt />}
        {/* {snap.model === "Boots" && <Boots />} */}
        {/* {snap.model === "Jeans" && <Jeans />} */}
        {snap.model === "Hoodie" && <Hoodie />}
    </>
  )
}

export default ActiveModel