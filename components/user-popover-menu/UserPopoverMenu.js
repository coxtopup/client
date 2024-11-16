/*
 *
 * Title: UserPopoverMenu
 * Description: --
 * Author: Saymon
 * Date: 25 November 2021 (Thursday)
 *
 */
import { useContext, useEffect, useState } from 'react';
import { AiOutlinePoweroff, AiOutlineUser } from 'react-icons/ai';
import { BiSupport, BiTransfer } from 'react-icons/bi';
import { IoWalletOutline } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { __whatsapp_support_number_link } from '../../config/globalConfig';
import routes from '../../config/routes';
import { globalContext } from '../../pages/_app';
import UserMenuList from './UserMenuList';
import UserPopoverHead from './UserPopoverHead';

function UserPopoverMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useContext(globalContext);

  const closePopover = () => setIsOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', closePopover);
    return () => window.removeEventListener('scroll', closePopover);
  }, []);

  return (
    <div>
      <div className="relative">
        <UserPopoverHead onClick={() => setIsOpen(true)} isOpen={isOpen} />
        <div
          className={`absolute top-[calc(100%+5px)] right-0 py-1 bg-white min-w-[185px] z-[9999999999] border border-gray-200 rounded-md duration-150 ${
            isOpen
              ? 'pointer-events-auto opacity-100 translate-y-0'
              : 'translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div onClick={closePopover}>
            <UserMenuList
              icon={<AiOutlineUser size={18} />}
              text="My Profile"
              link={routes.profile.name}
            />

            <UserMenuList
              icon={<BiTransfer size={18} />}
              text="Add Money"
              link={routes.addMoney.name}
            />
            <UserMenuList
              icon={<RiShoppingCartLine size={18} />}
              text="My Orders"
              link={routes.myOrder.name}
            />
            <UserMenuList
              icon={<IoWalletOutline size={18} />}
              text="My Transaction"
              link={routes.myWallet.name}
            />
            {/* <UserMenuList
              icon={<GrTransaction size={18} />}
              text="My Transaction"
              link={routes.myTransaction.name}
            /> */}
            <UserMenuList
              icon={<BiSupport size={18} />}
              text="Support"
              link={__whatsapp_support_number_link}
            />
            {/* <UserMenuList
              icon={<GiShoppingCart size={18} />}
              text="My Shop"
              link={routes.myShop.name}
            /> */}
            <UserMenuList
              icon={<AiOutlinePoweroff size={18} />}
              text="Logout"
              onClick={signOut}
            />
          </div>
          {/* <UserMenuList />
        <UserMenuList />
        <UserMenuList />
        <UserMenuList /> */}
        </div>
        {/* Hidden Overly --Start-- */}
      </div>
      {isOpen && (
        <div className="_absolute_full fixed" onClick={closePopover}></div>
      )}
      {/* Hidden Overly --End-- */}
    </div>
  );
}

export default UserPopoverMenu;
