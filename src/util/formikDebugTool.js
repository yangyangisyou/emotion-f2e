import React from 'react';
import { FormikConsumer } from 'formik';
import styled from 'styled-components';

const DebugWrapper = styled.div`
    width: 100%;
    margin: 3rem 0;
    border-radius: 4;
    background: #f6f8fa;
    box-shadow: 0 0 1px  #eee inset;
    .debug-title {
        text-transform: 'uppercase';
        font-size: 12px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-weight: 500;
        padding: .5rem;
        background: #555;
        color: #fff;
        letter-spacing: 1px;
    }
    .debug-state {
        font-size: 20px;
        line-height: 25px;
        padding: .25rem .5rem;
        overflow-x: scroll;
    }
`;

const FormikDebugTool = ({ title }) => (
  <DebugWrapper>
    <div className="debug-title">Formik State{title ? ` - ${title}` : ''}</div>
    <FormikConsumer>
      {({
        validationSchema, validate, onSubmit, ...rest
      }) => (
        <pre
          style={ {
            fontSize: '.65rem',
            padding: '.25rem .5rem',
            overflowX: 'scroll',
          } }
        >
          {JSON.stringify(rest, null, 2)}
        </pre>
      )}
      {/* { (formikState) => <pre className="debug-state">{JSON.stringify(formikState, null, 2)}</pre> } */}
    </FormikConsumer>
  </DebugWrapper>
);

export default FormikDebugTool;
