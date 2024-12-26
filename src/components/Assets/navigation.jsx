import {
    HiOutlineViewGrid,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineCube,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
    HiOutlineDocumentText,
    HiOutlineLogout

} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
 
     key:'dashboard',
     label:'Dashboard',
     path:'/Dashboard',
     icon: <HiOutlineViewGrid/>

},
{
 
    key:'products',
    label:'Products',
    path:'/products',
    icon: <HiOutlineCube/>

},
{
 
    key:'orders',
    label:'Orders',
    path:'/orders',
    icon: <HiOutlineShoppingCart/>

},

{
 
    key:'customers',
    label:'Customers',
    path:'/customers',
    icon: <HiOutlineUsers/>

},

{
 
    key:'transactions',
    label:'Transactions',
    path:'/transactions',
    icon: <HiOutlineViewGrid/>

},
{
 
    key:'messages',
    label:'Messages',
    path:'/messages',
    icon: <HiOutlineAnnotation/>

},



]

export const DASHBOARD_SIDEBAR_BUTTONS_LINKS = [
    {
        key:'settings',
        label:'Settings',
        path:'/settings',
        icon: <HiOutlineCog/>
    },
    {
        key:'help&support',
        label:'Help & Supports',
        path:'/supports',
        icon: <HiOutlineQuestionMarkCircle/>
    },
    {
        key:'Logout',
        label:'Log-out',
        path:'/Logout',
        icon: <HiOutlineLogout/>
    }
]
