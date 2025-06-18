import { socialProviders } from '../utils/constant';

const SocialLogin = () => (
    <div className="grid grid-cols-6 gap-3 mb-8">
        {socialProviders.map(({ name, icon: Icon, color }) => (
            <button
                key={name}
                title={`Sign in with ${name}`}
                className={`flex items-center justify-center p-3 border border-gray-200 rounded-xl transition-all duration-200 ${color} group`}
            >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
            </button>
        ))}
    </div>
);

export default SocialLogin;
