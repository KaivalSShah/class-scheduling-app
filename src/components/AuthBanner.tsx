import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase'

    
export const AuthBanner = () => {
  const { user } = useAuthState();

  return (
    <>
      <div className="p-2 flex gap-4">
        <span className="text-xl text-black-400 border border-3 p-4">
          Hey, { user ? user.displayName : 'Guest User' }!
        </span>
        <span className="ml-auto">
          {
            user
            ? <button onClick={signOut}>Sign Out</button>
            : <button onClick={signInWithGoogle}>Sign In</button>
          }
        </span>
      </div>
      <hr className="my-4" />
    </>
  );
};