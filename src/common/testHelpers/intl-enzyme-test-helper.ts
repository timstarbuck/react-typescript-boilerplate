import * as React from 'react';
import {IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';

import localeData from '../../translations/all';

    const messages = localeData['en'];
    // Create the IntlProvider to retrieve context for wrapping around.
    const intlProvider = new IntlProvider({ locale: 'en', messages }, {});
    const { intl } = (intlProvider as any).getChildContext();
    /**
     * When using React-Intl `injectIntl` on components, props.intl is required.
     */
    function nodeWithIntlProp(node) {
        return React.cloneElement(node, { intl });
    }

    export function mountWithIntl(node, { context = {}, childContextTypes = {} } = {}) {
        return mount(
            nodeWithIntlProp(node),
            {
                context: Object.assign({}, context, {intl}),
                childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes)
            }
        );
    }
