'use client';

function TestClientComponent() {
  return (
    <div>
      <button
        onClick={() => {
          throw new Error('Error thrown after button click');
        }}>
        Click to see some magic.
      </button>
    </div>
  );
}

export default TestClientComponent;
