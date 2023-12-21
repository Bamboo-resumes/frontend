import React from 'react';

interface ResumeViewProps {
    viewResume: any;
}

function ResumeView(props: ResumeViewProps){
    const viewResume = props.viewResume;
    return(
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <object
          data={viewResume}
          type="application/pdf"
          width="100%"
          height="600px"
          style={{ display: 'block', margin: 'auto' }}
        ></object>
            </div>
    )
}

export default ResumeView