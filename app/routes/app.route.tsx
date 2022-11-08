import { MainNavigator } from "@app/modules/dashboard/dashboard.routes"
import { RootState } from "@app/store"
import React from "react"
import { useSelector } from "react-redux"
import { AuthNavigator } from "../modules/auth/auth.route"

export const AppRoute = () => {
    const {loginStatus} = useSelector((state: RootState) => state)
      // return <AuthNavigator />
    // return <MainNavigator />
    return loginStatus  ? <MainNavigator /> : <AuthNavigator />
  }
  