import React, { useState } from 'react';
import styles from './styles/ProjectDetails.module.css';
import SelectableOption from './SelectableOption';

const ProjectDetails = () => {
    const [service, setService] = useState('');
    const [budget, setBudget] = useState('');
    const [pages, setPages] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleChange = (section, value) => {
        switch (section) {
            case 'service':
                setService(value);
                break;
            case 'budget':
                setBudget(value);
                break;
            case 'pages':
                setPages(value);
                break;
            case 'deadline':
                setDeadline(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleBar}>
                <h2 className={styles.title}>Tell us a little about your project</h2>
            </div>

            <div className={styles.section}>
                <p className={styles.question}>How can I help?</p>
                <div className={styles.options}>
                    <SelectableOption
                        name="service"
                        value="Webflow Development"
                        labelText="Webflow Development"
                        checked={service === 'Webflow Development'}
                        onChange={(e) => handleChange('service', e.target.value)}
                    />
                    <SelectableOption
                        name="service"
                        value="Web Design"
                        labelText="Web Design"
                        checked={service === 'Web Design'}
                        onChange={(e) => handleChange('service', e.target.value)}
                    />
                    <SelectableOption
                        name="service"
                        value="Both"
                        labelText="Both"
                        checked={service === 'Both'}
                        onChange={(e) => handleChange('service', e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <p className={styles.question}>Your estimated budget (In GBP)</p>
                <div className={styles.options}>
                    <SelectableOption
                        name="budget"
                        value="<£10,000"
                        labelText="&lt;£10,000"
                        checked={budget === '<£10,000'}
                        onChange={(e) => handleChange('budget', e.target.value)}
                    />
                    <SelectableOption
                        name="budget"
                        value="£10,000 - £20,000"
                        labelText="£10,000 - £20,000"
                        checked={budget === '£10,000 - £20,000'}
                        onChange={(e) => handleChange('budget', e.target.value)}
                    />
                    <SelectableOption
                        name="budget"
                        value="£20,000 - £30,000"
                        labelText="£20,000 - £30,000"
                        checked={budget === '£20,000 - £30,000'}
                        onChange={(e) => handleChange('budget', e.target.value)}
                    />
                    <SelectableOption
                        name="budget"
                        value="£30,000+"
                        labelText="£30,000+"
                        checked={budget === '£30,000+'}
                        onChange={(e) => handleChange('budget', e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <p className={styles.question}>How many pages?</p>
                <div className={styles.options}>
                    <SelectableOption
                        name="pages"
                        value="1-3"
                        labelText="1-3"
                        checked={pages === '1-3'}
                        onChange={(e) => handleChange('pages', e.target.value)}
                    />
                    <SelectableOption
                        name="pages"
                        value="3-6"
                        labelText="3-6"
                        checked={pages === '3-6'}
                        onChange={(e) => handleChange('pages', e.target.value)}
                    />
                    <SelectableOption
                        name="pages"
                        value="6-10"
                        labelText="6-10"
                        checked={pages === '6-10'}
                        onChange={(e) => handleChange('pages', e.target.value)}
                    />
                    <SelectableOption
                        name="pages"
                        value="10+"
                        labelText="10+"
                        checked={pages === '10+'}
                        onChange={(e) => handleChange('pages', e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <p className={styles.question}>Do you have a deadline?</p>
                <div className={styles.options}>
                    <SelectableOption
                        name="deadline"
                        value="<1 Month"
                        labelText="&lt;1 Month"
                        checked={deadline === '<1 Month'}
                        onChange={(e) => handleChange('deadline', e.target.value)}
                    />
                    <SelectableOption
                        name="deadline"
                        value="1-3 Months"
                        labelText="1-3 Months"
                        checked={deadline === '1-3 Months'}
                        onChange={(e) => handleChange('deadline', e.target.value)}
                    />
                    <SelectableOption
                        name="deadline"
                        value="3-6 Months"
                        labelText="3-6 Months"
                        checked={deadline === '3-6 Months'}
                        onChange={(e) => handleChange('deadline', e.target.value)}
                    />
                    <SelectableOption
                        name="deadline"
                        value="6+ Months"
                        labelText="6+ Months"
                        checked={deadline === '6+ Months'}
                        onChange={(e) => handleChange('deadline', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;