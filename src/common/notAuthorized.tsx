import * as React from 'react';
import {FormattedMessage} from 'react-intl';

export const NotAuthorized = () => {
    return (<div>
        <h2><FormattedMessage id={'Unauthorized.Title'}
                                defaultMessage={'Unauthorized'}
                                />
        </h2>
         <div className='notice notice-danger' style={{display: 'block'}}>
             <FormattedMessage id={'Unauthorized.Detail'}
                                defaultMessage={'You do not have privileges to view this page.'}/>
        </div>
    </div>
    );
};
