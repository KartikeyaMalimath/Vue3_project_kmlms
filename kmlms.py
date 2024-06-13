import subprocess
import os
import signal
import sys

# Global variables to store subprocesses
backend_process = None
frontend_process = None


def start_backend():
    global backend_process
    # Determine the directory of the current script (rundev.py)
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Navigate to the FastAPI backend directory relative to the script
    backend_path = os.path.join(current_dir, "app")
    os.chdir(backend_path)

    # Run FastAPI backend server using uvicorn
    backend_process = subprocess.Popen(["uvicorn", "main:app", "--reload"])


def start_frontend():
    global frontend_process
    # Determine the directory of the current script (rundev.py)
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Navigate to the Vue.js frontend directory relative to the script
    frontend_path = os.path.join(current_dir, "frontend")
    os.chdir(frontend_path)

    # Run Vue.js frontend server using npm
    frontend_process = subprocess.Popen(["npm", "run", "serve"], shell=True)


def terminate_servers(signal, frame):
    global backend_process, frontend_process
    # Terminate backend server
    if backend_process:
        backend_process.terminate()
    # Terminate frontend server
    if frontend_process:
        frontend_process.terminate()

    sys.exit(0)


if __name__ == "__main__":
    try:
        # Start backend and frontend servers concurrently
        start_backend()
        start_frontend()

        # Capture Ctrl+C to terminate servers
        signal.signal(signal.SIGINT, terminate_servers)

        # Keep the script running until Ctrl+C is pressed
        while True:
            pass

    except KeyboardInterrupt:
        print("\nTerminating servers...")
        terminate_servers(signal.SIGINT, None)
    except Exception as e:
        print(f"Error: {str(e)}")
        terminate_servers(signal.SIGTERM, None)
