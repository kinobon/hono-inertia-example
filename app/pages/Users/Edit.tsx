import { Head, Link, useForm } from '@inertiajs/react'
import type { PageProps } from '../../pages.gen'
import Layout from '../Layout'

export default function UsersEdit({ user }: PageProps<'Users/Edit'>) {
  const form = useForm({
    name: user.name,
    email: user.email,
    bio: user.bio ?? ''
  })

  const fieldErrors = form.errors

  return (
    <Layout>
      <Head title={`Edit ${user.name}`} />
      <p>
        <Link href={`/users/${user.id}`}>← Back to {user.name}</Link>
      </p>
      <h1>Edit {user.name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.put(`/users/${user.id}`)
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={form.data.name}
            onChange={(e) => {
              form.setData('name', e.target.value)
              form.clearErrors('name')
            }}
          />
          {fieldErrors.name && <p className="error">{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.data.email}
            onChange={(e) => {
              form.setData('email', e.target.value)
              form.clearErrors('email')
            }}
          />
          {fieldErrors.email && <p className="error">{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={form.data.bio}
            onChange={(e) => {
              form.setData('bio', e.target.value)
              form.clearErrors('bio')
            }}
          />
          {fieldErrors.bio && <p className="error">{fieldErrors.bio}</p>}
        </div>
        <button type="submit" disabled={form.processing}>
          Update
        </button>
      </form>
    </Layout>
  )
}
