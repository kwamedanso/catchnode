import React from 'react';
import './styles/Icon.css';

const Icon = ({ name, color, size }) => {
    // We're using a simple implementation here - in a real project,
    // you would likely use an icon library like react-icons, heroicons, etc.
    const renderIcon = () => {
        switch (name) {
            case 'arrow-right':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 20} height={size || 20} fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                );
            case 'chevron-down':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 20} height={size || 20} fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                );
            case 'external-link':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 20} height={size || 20} fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                );
            // For service icons, we'll use simple placeholders
            // In a real project, you would have specific SVGs for each service
            case 'startup-icon':
            case 'web-icon':
            case 'mobile-icon':
            case 'cloud-icon':
            case 'lowcode-icon':
            case 'ai-icon':
            case 'qa-icon':
            case 'bigdata-icon':
            case 'webflow-icon':
            case 'design-icon':
            case 'fleet-icon':
            case 'healthcare-icon':
            case 'clinic-icon':
            case 'powerbi-icon':
            case 'regtech-icon':
            case 'about-icon':
            case 'blog-icon':
            case 'careers-icon':
            case 'contact-icon':
            case 'edtech-icon':
            case 'financial-icon':
            case 'ecommerce-icon':
            case 'industry-icon':
            case 'insurance-icon':
                return (
                    <div className="placeholder-icon" style={{ width: size || 24, height: size || 24, backgroundColor: "#0052FF" }}>
                        <span>{name.charAt(0).toUpperCase()}</span>
                    </div>
                );
            case 'angular-icon':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 24} height={size || 24}>
                        <path fill="#DD0031" d="M9.93 12.645h4.134L12 7.255z" />
                        <path fill="#DD0031" d="M12 3.1L4.202 5.83l1.2 10.048L12 21.9l6.593-6.022 1.206-10.048z" />
                        <path fill="#C3002F" d="M12 3.1v4.155l-.007.018 3.327 7.35H9.93V18.5l6.592-6.022 1.206-10.048z" />
                    </svg>
                );
            case 'react-icon':
            case 'react-native-icon':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 24} height={size || 24}>
                        <path fill="#61DAFB" d="M12 13.9a1.9 1.9 0 11.001-3.801A1.9 1.9 0 0112 13.9zm-.19-10.674a22.93 22.93 0 00-7.306 1.064 3.57 3.57 0 00-1.866 1.407c-.401.65-.62 1.483-.35 2.484a9.96 9.96 0 00.66 1.886c.113.252.37.83.463 1.033a20.85 20.85 0 00-.462 1.032 9.96 9.96 0 00-.66 1.887c-.27 1.001-.052 1.834.35 2.484a3.57 3.57 0 001.865 1.407A9.88 9.88 0 0011.81.774zm0 1.49a21.78 21.78 0 017.45 1.262 5.91 5.91 0 011.75.874c.533.401.877 1.143.499 2.336a8.44 8.44 0 01-.574 1.623 16.98 16.98 0 01-.33.724c-.036.078-.084.18-.132.28a18.8 18.8 0 01-.13.274 16.96 16.96 0 01-.332.724 8.44 8.44 0 01-.573 1.623c-.378 1.193-.034 1.935.5 2.336.278.209.635.407 1.05.599.415.192.895.367 1.402.524A21.78 21.78 0 016.74 20.52c-1.217-.334-2.214-.7-2.944-1.135-.533-.401-.877-1.143-.499-2.336.14-.536.336-1.088.573-1.623a16.95 16.95 0 01.462-1.005 16.98 16.98 0 01-.462-1.005 8.45 8.45 0 01-.573-1.623c-.378-1.193-.034-1.935.499-2.336.73-.436 1.727-.801 2.944-1.135z" />
                        <path fill="#61DAFB" d="M6.175 9.806a48.86 48.86 0 00.368 2.18 41.432 41.432 0 00-.368 2.186 41.421 41.421 0 01-.158 1.028 9.74 9.74 0 01-.08.422c-.538-1.563-.877-3.18-1.009-4.822.132-1.643.47-3.26 1.01-4.824.463 1.333.724 2.754.815 4.184.033.548.033 1.098 0 1.646a23.587 23.587 0 01-.184 1.97c.053-.666.116-1.326.19-1.97a20.2 20.2 0 010-1.646 23.6 23.6 0 01-.19-1.97 24.37 24.37 0 01-.185-2.043A17.98 17.98 0 014.44 11.99a17.98 17.98 0 01-.815 4.824 17.98 17.98 0 01-.815-4.824c.096-1.643.375-3.254.815-4.824.304 1.341.5 2.724.574 4.12.026.55.026 1.101 0 1.646a23.59 23.59 0 01-.19 1.97c.053-.666.116-1.326.19-1.97.073-.549.08-1.098.053-1.646a23.585 23.585 0 01-.184-1.97 24.44 24.44 0 01-.185-2.043 17.98 17.98 0 014.422 8.76A17.99 17.99 0 017.5 6.24c.21.814.358 1.646.442 2.486.026.55.026 1.101 0 1.646-.053.65-.117 1.31-.19 1.97.053-.666.116-1.326.19-1.97.073-.549.08-1.098.053-1.646.08-.84.228-1.672.437-2.486.548 1.563.886 3.18 1.018 4.823a20.49 20.49 0 01-1.018 4.823c-.536-1.563-.877-3.18-1.009-4.823-.033-.548-.033-1.098 0-1.646.053-.65.117-1.31.19-1.97-.053.666-.117 1.326-.19 1.97a20.28 20.28 0 000 1.646z" />
                    </svg>
                );
            case 'azure-icon':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || 24} height={size || 24}>
                        <path fill="#0089D6" d="M12.785 2H21.5L11.76 22H3L12.785 2z" />
                        <path fill="#0089D6" d="M16.195 2L9.728 13.196 4 18.658h14.523L16.195 2z" />
                    </svg>
                );
            default:
                return <div className="icon-fallback">?</div>;
        }
    };

    return <div className="icon">{renderIcon()}</div>;
};

export default Icon;