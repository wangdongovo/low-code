import React from 'react'
import { Navigate } from 'react-router-dom'


interface AuthProps {
  isAuthenticated: boolean
  children: React.ReactNode
}


const withAuth = (WrappedComponent: React.ComponentType<AuthProps>) => {
  return class extends React.Component<AuthProps> {

    
    static defaultProps = {
      isAuthenticated: localStorage.getItem('isAuthenticated')
    }


    

    render() {
      const { children } = this.props
      const isAuthenticated = localStorage.getItem('isAuthenticated')

      console.log('🍍🙏🍍👉: localStorage.getItem', localStorage.getItem('isAuthenticated'))

      if (!isAuthenticated) {
        return <Navigate to="/login" />
      }

      return <WrappedComponent {...this.props}>{children}</WrappedComponent>
    }
  }
}

export default withAuth
