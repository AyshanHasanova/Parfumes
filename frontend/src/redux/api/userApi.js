


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://parfumes-1.onrender.com/api/v1", 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        // Tokeni hər sorğuda Header-ə mütləq əlavə edirik
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    // Kompüter və bəzi brauzerlərdə sessiyaların stabil qalması üçün
    credentials: "include" 
  }),
  tagTypes: ["User", "Referrals", "AdminUsers"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          localStorage.removeItem("token");
          dispatch(userApi.util.resetApiState());
        } catch (err) {
          console.error("Logout xətası:", err);
        }
      },
    }),
    getUserProfile: builder.query({
      // MÜHÜM: Mobil brauzerlərin "Giriş et" düyməsində ilişib qalmaması üçün
      // URL sonuna hər dəfə dəyişən vaxt ştampı əlavə edirik.
      query: () => `/me?t=${new Date().getTime()}`,
      providesTags: ["User"],
    }),
    getMyReferrals: builder.query({
      query: () => `/me/referrals`,
      providesTags: ["Referrals"],
    }),
    getMyNetworkTree: builder.query({
      query: () => `/me/network-tree`,
      providesTags: ["Referrals"],
    }),
    getAllUsersAdmin: builder.query({
      query: () => "/admin/users",
      providesTags: ["AdminUsers"],
    }),
    updateReferralByAdmin: builder.mutation({
      query: (body) => ({
        url: "/admin/referral-update",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["AdminUsers", "Referrals", "User"],
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/password/forget",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, data }) => ({
        url: `/password/reset/${token}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

// Bütün hook-ların eksiksiz exportu
export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMyReferralsQuery,
  useGetMyNetworkTreeQuery,
  useGetAllUsersAdminQuery,
  useUpdateReferralByAdminMutation,
} = userApi;




