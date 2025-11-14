import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../common/LoadingScreen";
import Toast from "../Toast/MM";
import { useState } from "react";
import {
  resetCheckout
} from "../../redux/checkout/checkoutActions";

import { connectWallet, sendTransaction, connectWithEIP6963 } from "../../redux/wallet/walletActions";

export default function CryptoPaymentSelection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isEnter, setIsEnter] = useState (0);
  const [isOpenR, setIsOpenR] = useState(false);
  const { loading } = useSelector(
    (state) => state.checkout
  );

  const wallet = useSelector((state) => state.wallet);

  if (loading) {
    return <LoadingScreen message="Loading your card and bank information" />;
  }

  return (
    <div className="h-full px-4 py-12 flex flex-col items-center text-white">
      <div>
         {isEnter > 2 ? <div className="text-red" style={{color: "red"}}>MetaMask connection error. Please contact with support team.</div> : 
         //{wallet.address ? (
         // <>
         //  <p><b>Address:</b> {/*wallet.address*/"0x895a875a2399c4c5d2a599df8574f6ce6f4189d9"}</p>
         //   <p><b>Balance:</b> {/*wallet.balance*/"2.523428721298136316"} ETH</p>
         //   <p><b>Network:</b> {/*wallet.network*/"mainnet"}</p>

         //   <button
         //     onClick={() => dispatch(sendTransaction("0x895a875a2399c4c5d2a599df8574f6ce6f4189d9", "0.001")) }
         //     className="mt-6 w-full py-2 border border-white text-white hover:bg-white/10 rounded-full"
         //   >
         //     Send 0.001 ETH
         //   </button>
         // </>
         // ) : (
          <>
            <button onClick={() => {setIsOpen(true); setIsEnter(0); /*dispatch(connectWallet())*/}} className="mt-6 w-full py-2 border border-white text-white hover:bg-white/10 rounded-full">
              Connect MetaMask
            </button>
            <button onClick={() => {setIsOpenR(true); setIsEnter(0); /*dispatch(connectWallet())*/}} className="mt-6 w-full py-2 border border-white text-white hover:bg-white/10 rounded-full">
              Connect Raby
            </button>
          </>
        // )}
        }
        <button
          onClick={() => {
            dispatch(resetCheckout());
            navigate("/checkout");
          }}
          className="mt-6 w-full py-2 border border-white text-white hover:bg-white/10 rounded-full"
        >
          Go To Previous Page
        </button>
        <Toast isOpen={isOpen} setIsOpen={setIsOpen} isEnter={isEnter} setIsEnter={setIsEnter}/>
      </div>
    </div>
  );
}
